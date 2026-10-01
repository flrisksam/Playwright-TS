pipeline {
  agent { label 'linux' }

  options {
    timeout(time: 30, unit: 'MINUTES')
    timestamps()
  }

  parameters {
    choice(name: 'TEST_ENV', choices: ['qa', 'staging'], description: 'Environment file to load')
  }

  environment {
    CI = 'true'
    NODE_ENV = "${params.TEST_ENV}"
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'npm ci'
        sh 'npx playwright install --with-deps'
      }
    }

    stage('Quality checks') {
      steps {
        sh 'npm run lint'
        sh 'npm run typecheck'
      }
    }

    stage('Run Playwright tests') {
      steps {
        sh 'npm test'
      }
    }
  }

  post {
    always {
      junit allowEmptyResults: true, testResults: 'test-results/junit.xml'
      archiveArtifacts allowEmptyArchive: true,
        artifacts: 'playwright-report/**,test-results/**',
        fingerprint: true
    }
  }
}