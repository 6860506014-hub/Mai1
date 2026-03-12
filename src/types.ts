export type DSCategory = 'linear' | 'non-linear';

export interface DataStructure {
  id: string;
  name: string;
  nameThai: string;
  category: DSCategory;
  description: string;
  descriptionThai: string;
  keyFeatures: string[];
  keyFeaturesThai: string[];
  visualType: 'array' | 'stack' | 'queue' | 'linked-list' | 'tree' | 'graph';
}
