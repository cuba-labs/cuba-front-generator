import {StudioTemplateProperty, StudioTemplatePropertyType} from "../../../common/studio/studio-model";
import {Entity, View} from "../../../common/model/cuba-model";

export const entityManagementGeneratorParams: StudioTemplateProperty[] = [
  {
    code: 'entity',
    caption: 'Entity',
    propertyType: StudioTemplatePropertyType.ENTITY,
    required: true
  },
  {
    code: 'managementComponentName',
    caption: 'CRUD component name',
    propertyType: StudioTemplatePropertyType.POLYMER_COMPONENT_NAME,
    defaultValue: "-management",
    required: true
  },
  {
    code: 'listType',
    caption: 'List type',
    propertyType: StudioTemplatePropertyType.OPTION,
    defaultValue: "cards",
    required: true,
    options: ['cards', 'list']
  },
  {
    code: 'listComponentName',
    caption: 'List component name',
    propertyType: StudioTemplatePropertyType.POLYMER_COMPONENT_NAME,
    defaultValue: "-list",
    required: true
  },
  {
    code: 'listView',
    caption: 'List view',
    propertyType: StudioTemplatePropertyType.VIEW,
    relatedProperty: "entity",
    required: true
  },
  {
    code: 'editComponentName',
    caption: 'Edit component name',
    propertyType: StudioTemplatePropertyType.POLYMER_COMPONENT_NAME,
    defaultValue: '-edit',
    required: true
  },
  {
    code: 'editView',
    caption: 'Edit view',
    propertyType: StudioTemplatePropertyType.VIEW,
    relatedProperty: "entity",
    required: true
  }
];

export type entityManagementListType = 'list' | 'cards';

export interface EntityManagementAnswers {
  entity: Entity;
  managementComponentName: string;
  listType: entityManagementListType;
  listComponentName: string;
  listView: View;
  editComponentName: string;
  editView: View;
}