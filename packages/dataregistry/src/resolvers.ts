/**
 * @license BSD-3-Clause
 *
 * Copyright (c) 2019 Project Jupyter Contributors.
 * Distributed under the terms of the 3-Clause BSD License.
 */

import {
  DataTypeNoArgs,
  DataTypeStringArg,
  TypedConverter,
} from "./datatypes";
import { createConverter } from "./createConverter";

/**
 * Datasets without a known mimetype start as just a resolve mimetype and no data.
 */
export const resolveDataType = new DataTypeNoArgs<void>(
  "application/x.jupyter.resolve"
);

/**
 * Then, their mimetype is resolved.
 */
export const resolveMimetypeDataType = new DataTypeStringArg<void>(
  "application/x.jupyter.resolve",
  "mimetype"
);

/**
 * Creates a converter from a resolver mimetype to a file mimetype.
 */
export function resolveExtensionConverter(
  extension: string,
  mimeType: string
): TypedConverter<typeof resolveDataType, typeof resolveMimetypeDataType> {
  return createConverter(
    { from: resolveDataType, to: resolveMimetypeDataType },
    ({ url, data }) => {
      if (url.pathname.endsWith(extension) && !url.hash) {
        return { type: mimeType, data };
      }
      return null;
    }
  );
}
