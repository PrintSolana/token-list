import { validateValidatedTokensCsv } from "./logic";
import minimist from "minimist";
// CLI entrypoint which accepts an argument
(async () => {
    try {
        const argv = minimist(process.argv.slice(2));
        await validateValidatedTokensCsv(argv._[0]);
    }
    catch (error: any) {
        console.log(error.message)
    }
})();