export interface TestEnvironmentDefinition {
    readonly environment : string,
    browser: "chromium" | "firefox" | "webkit",
    headless : boolean,
    timeout?: number
}

export const testEnvironment : TestEnvironmentDefinition[] = [
    { environment : "QA", browser : "chromium", headless : true, timeout : 30000},
    { environment : "UAT", browser : "firefox", headless : false}
]