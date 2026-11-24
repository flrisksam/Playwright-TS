import { testEnvironment } from "./testConfig";
import { getBrowserInfo, getTimeoutInfoTime} from "./browserUtils";

for(const testInfo of testEnvironment){
    console.log(getBrowserInfo(testInfo));
}

for(const time of testEnvironment){
    console.log(getTimeoutInfoTime(time))
}