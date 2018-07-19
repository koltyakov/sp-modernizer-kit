export interface INavigationItem {
  Id: number;
  Title: string;
  Url: string;
  IsDocLib: boolean;
  IsExternal: boolean;
  ParentId: number;
  ListTemplateType: number;
  Children: INavigationItem[];
}

export interface IHubSiteData {
  themeKey: string;
  name: string;
  url: string;
  logoUrl: string;
  usesMetadataNavigation: boolean;
  navigation: INavigationItem[];
  siteDesignId: string;
}
