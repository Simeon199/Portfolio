export interface TechnologyItem {
    name: string;
    imageSrc: string;
}

export interface technologyListModel {
    frontend: TechnologyItem[];
    backend: TechnologyItem[];
}