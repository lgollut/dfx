/**
 * Borrowed from https://raw.githubusercontent.com/eclipsesource/jsonforms/master/packages/core/src/models/uischema.ts
 * with a minor
 */

export interface UISchemaBaseElement {
  /**
   * The type of this UI schema element.
   */
  type: string;

  /**
   * Any additional options.
   */
  options?: { [key: string]: any };
}

export interface UiSchemaElement extends UISchemaBaseElement {
  scope?: string;
  label?: string;
  elements?: UiSchemaElement[];
}

export interface UiSchema extends UISchemaBaseElement {
  label?: string;
  elements?: UiSchemaElement[];
}
