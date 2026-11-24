import { TestEnvironmentDefinition } from "./testConfig";
import { testEnvironment } from "./testConfig";

export function getBrowserInfo(environmentDetails:TestEnvironmentDefinition):string {
    return `${environmentDetails.environment} uses browser ${environmentDetails.browser}`;
}

export function getTimeoutInfoTime(environmentDetails:TestEnvironmentDefinition):string{
    if (environmentDetails.timeout === undefined) {
        return `${environmentDetails.environment} uses default timeout`;
    }

    return `${environmentDetails.environment} timeout is ${environmentDetails.timeout} ms`;
}