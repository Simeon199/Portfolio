import { Component, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { SingleProjectFadedInComponent } from './single-project-faded-in/single-project-faded-in.component';
import { OverlayComponent } from './overlay/overlay.component';
import { CommonModule } from '@angular/common';
import { projectsData } from './projects.data';
import { projectsModel } from './projects.model';
import { LanguageService } from '../../language.service';
import { TranslateModule } from '@ngx-translate/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    SingleProjectFadedInComponent,
    SingleProjectComponent,
    OverlayComponent,
    CommonModule,
    TranslateModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent {

  @ViewChild('projectCollectionWrapper') projectCollectionWrapper!: ElementRef;
  @ViewChild('contentWrapperWithoutPopUps') contentWrapperWithoutPopUps!: ElementRef;
  @ViewChildren('projectElement') projectElements!: QueryList<ElementRef>;

  currentHoveredProject: string = '';
  currentHoveredProjectImageSrc: string = '';
  currentHoveredProjectIndex: string = '';
  currentHoveredProjectElementIndex: number = -1;
  hoveredProjectLocation = '';
  currentProjectOpened: string = '';
  currentProjectOpenedDescription: string = '';
  currentProjectOpenedImageSrc: string = '';
  currentProjectOpenedTechnologies: string[] = [];
  currentProjectOpenedIndexAsString: string = '';
  currentProjectOpenedGitHubLink: string = '';
  currentProjectOpenedProjectLink: string = '';
  currentProjectOpenedIsBackend: boolean = false;
  currentProjectOpenedFrontendGitHubLink: string = '';
  currentProjectOpenedBackendGitHubLink: string = '';
  isOverlayVisible = false;
  projectsData = projectsData;
  projectsArray = Object.values(this.projectsData);
  currentLanguage: string = "de";
  allProjects: projectsModel = projectsData;

  constructor(private languageService: LanguageService, public sharedService: SharedService) {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  updateVariablesFromChild(updatedValues: {
    currentProjectOpened: string,
    currentProjectOpenedDescription: string,
    currentProjectOpenedImageSrc: string,
    currentProjectOpenedTechnologies: string[],
    currentHoveredProjectIndex: string,
    currentProjectOpenedGitHubLink: string,
    currentProjectOpenedProjectLink: string;
    currentProjectOpenedIsBackend: boolean;
    currentProjectOpenedFrontendGitHubLink: string;
    currentProjectOpenedBackendGitHubLink: string;
  }) {
    this.currentProjectOpened = updatedValues.currentProjectOpened;
    this.currentProjectOpenedDescription = updatedValues.currentProjectOpenedDescription;
    this.currentProjectOpenedImageSrc = updatedValues.currentProjectOpenedImageSrc;
    this.currentProjectOpenedTechnologies = updatedValues.currentProjectOpenedTechnologies;
    this.currentHoveredProjectIndex = updatedValues.currentHoveredProjectIndex;
    this.currentProjectOpenedGitHubLink = updatedValues.currentProjectOpenedGitHubLink;
    this.currentProjectOpenedProjectLink = updatedValues.currentProjectOpenedProjectLink;
    this.currentProjectOpenedIsBackend = updatedValues.currentProjectOpenedIsBackend;
    this.currentProjectOpenedFrontendGitHubLink = updatedValues.currentProjectOpenedFrontendGitHubLink;
    this.currentProjectOpenedBackendGitHubLink = updatedValues.currentProjectOpenedBackendGitHubLink;
  }

  onMouseEnter(projectname: string, projectImageSource: string, projectIndex: string, elementIndex: number) {
    if (window.innerWidth > 1450) {
      this.currentHoveredProject = projectname;
      this.currentHoveredProjectImageSrc = projectImageSource;
      this.currentHoveredProjectIndex = projectIndex;
      this.currentHoveredProjectElementIndex = elementIndex;
    }
  }

  onMouseLeave() {
    if (window.innerWidth > 1450) {
      this.currentHoveredProject = '';
      this.currentHoveredProjectImageSrc = '';
      this.currentHoveredProjectElementIndex = -1;
    }
  }

  returnRightLocation(currentHoveredProject: string) {
    let style: any = '';
    this.setHoveredProjectLocation(currentHoveredProject)
    style = this.hoveredProjectLocation;
    return style;
  }

  setHoveredProjectLocation(currentHoveredProject: string) {
    if (!this.isProjectHovered()) return;
    const projectCenter = this.getProjectCenterRelativeToWrapper();
    const alignment = this.getAlignmentForPosition(projectCenter, this.getWrapperHeight());
    this.hoveredProjectLocation = `align-self: ${alignment}`;
  }

  private isProjectHovered(): boolean {
    return !!this.projectCollectionWrapper && this.currentHoveredProjectElementIndex >= 0 && this.getProjectElement() !== undefined;
  }

  private getProjectElement(): ElementRef | undefined {
    return this.projectElements?.toArray()[this.currentHoveredProjectElementIndex];
  }

  private getProjectCenterRelativeToWrapper(): number {
    const wrapperRect = this.projectCollectionWrapper.nativeElement.getBoundingClientRect();
    const projectRect = this.getProjectElement()!.nativeElement.getBoundingClientRect();
    return (projectRect.top - wrapperRect.top) + (projectRect.height / 2);
  }

  private getWrapperHeight(): number {
    return this.projectCollectionWrapper.nativeElement.getBoundingClientRect().height;
  }

  private getAlignmentForPosition(projectCenter: number, wrapperHeight: number): string {
    const thirdHeight = wrapperHeight / 3;
    if (projectCenter < thirdHeight) return "center";
    if (projectCenter < 2 * thirdHeight) return "center";
    return "flex-end";
  }

  openSingleProjectInBigPopUp(projectName: string) {
    this.currentProjectOpened = projectName;
    if (this.isOverlayVisible == true) {
      this.isOverlayVisible = false;
    } else if (this.isOverlayVisible == false) {
      this.isOverlayVisible = true;
    }
    this.sharedService.manageHideShowOverflow(true);
    this.generateRemainingProjectInformation();
  }

  generateRemainingProjectInformation() {
    Object.values(this.projectsData).forEach(project => {
      if (project.title == this.currentProjectOpened) {
        this.currentProjectOpenedDescription = project.description;
        this.currentProjectOpenedImageSrc = project.projectImageSource;
        this.currentProjectOpenedTechnologies = project.technologyList;
        this.currentProjectOpenedGitHubLink = project.gitHubLink;
        this.currentProjectOpenedProjectLink = project.projectLink;
        this.currentHoveredProjectIndex = project.projectIndexAsString;
        this.currentProjectOpenedIsBackend = project.isBackend || false;
        this.currentProjectOpenedFrontendGitHubLink = project.frontendGitHubLink || '';
        this.currentProjectOpenedBackendGitHubLink = project.backendGitHubLink || '';
      }
    })
  }

  closeOverlay() {
    this.isOverlayVisible = false;
    this.sharedService.manageHideShowOverflow(false);
  }
}