import apisearch from "apisearch";
import docsTransformer from "./DocsTransformer";
import * as apisearchConfig from "../../apisearch-config.js";


export function indexSection(section) : Promise<any> {

    const repository = apisearch.createRepository({
        app_id: apisearchConfig.app_id,
        index_id: apisearchConfig.index_id,
        token: apisearchConfig.admin_token,
        options: {
            endpoint: apisearchConfig.admin_hostname
        }
    });

    repository
        .getTransformer()
        .addWriteTransformer(docsTransformer);

    repository.addObject(section);
    return repository.flush();
}
