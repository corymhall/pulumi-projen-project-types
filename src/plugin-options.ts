
/**
 * PulumiPluginOptions
 */
export interface PulumiPluginOptions {
  /**
   * An optional package name to use
   */
  readonly name?: string;

  /**
   * An optional namespace to use
   *
   * @default 'pulumi'
   */
  readonly namespace?: string;
}
