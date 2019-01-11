/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See LICENSE.md in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * This is the entrypoint for extension.js, the main webpack bundle for the extension.
 * Anything needing to be exposed outside of the extension sources must be exported from here, because
 * everything else will be in private modules in extension.js.
 */

// Export activate for vscode to call (via entrypoint.js)
export { activateInternal, deactivateInternal } from './src/cosmosExtension';

// Exports for use by the tests, which are not packaged with the webpack bundle and therefore
//   only have access to code exported from this file. The tests should import '../extension.ts' (this file),
//   to access these exports, and at runtime they will pick up dist/extension.js.

export { ext } from './src/extensionVariables';
export * from './src/utils/array';
export { AttachedAccountsTreeItem, MONGO_CONNECTION_EXPECTED } from './src/tree/AttachedAccountsTreeItem';
export { parseDocDBConnectionString } from './src/docdb/docDBConnectionStrings';
export { emulatorPassword } from './src/constants';
export { getDocumentTreeItemLabel } from './src/utils/vscodeUtils';
export { validOnTimeoutOrException } from './src/utils/inputValidation';
export { addDatabaseToAccountConnectionString, getDatabaseNameFromConnectionString } from './src/mongo/mongoConnectionStrings';
export { MongoCommand } from './src/mongo/MongoCommand';
export { getAllCommandsFromText, getCommandFromTextAtLocation } from './src/mongo/MongoScrapbook';
export { rejectOnTimeout, valueOnTimeout } from './src/utils/timeout';
export { ObjectID, ObjectId } from 'bson';
