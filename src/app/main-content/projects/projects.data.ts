import { projectsModel } from "./projects.model";
export const projectsData: projectsModel = {
    join: {
        title: 'Join',
        projectImageSource: '../../../../assets/img/join.png',
        description: 'Bei dieser Anwendung handelt es sich um einen Aufgabenmanager nach dem Vorbild des Kanban-Systems. Erstellen und organisieren Sie Tasks mit Hilfe der Drag-and-Drop-Funktionalität und weisen Benutzer und Kategorien zu.',
        technologyList: ['HTML', '|', 'CSS', '|', 'JavaScript'],
        technologyImageIcons: [
            '../../../../assets/img/html-technology.svg',
            '|',
            '../../../../assets/img/css-technology.svg',
            '|',
            '../../../../assets/img/javascript-technology.svg'
        ],
        projectIndex: 0,
        projectIndexAsString: '01',
        projectLink: 'https://join.simon-kiesner.de/pages/login.html',
        gitHubLink: 'https://github.com/Simeon199/Join'
    },
    elPolloLoco: {
        title: 'El Pollo Loco',
        projectImageSource: '../../../../assets/img/pollo_loco.png',
        description: 'In diesem Jump-and-Run-Spiel, das mit objektorientierter Programmierung realisiert wurde, kämpft Pepe Peligroso gegen eine Gruppe verrückter Hühner. Seien Sie dabei und unterstützen Sie ihn bei diesem Abenteuer!',
        technologyList: ['HTML', '|', 'CSS', '|', 'JavaScript'],
        technologyImageIcons: [
            '../../../../assets/img/html-technology.svg',
            '|',
            '../../../../assets/img/css-technology.svg',
            '|',
            '../../../../assets/img/javascript-technology.svg'
        ],
        projectIndex: 1,
        projectIndexAsString: '02',
        projectLink: 'https://el-pollo-loco.simon-kiesner.de/index.html',
        gitHubLink: 'https://github.com/Simeon199/el_pollo_loco'
    },
    kanmind: {
        title: 'KanMind',
        projectImageSource: '../../../../assets/img/kanmind.png',
        description: 'Dies ist ein mit Django und dem Django REST Framework erstelltes Backend, das speziell für die Aufgabenverwaltung auf Kanban-Boards entwickelt wurde. Es unterstützt CRUD-Operationen in vollem Umfang und entspricht dem Python-Äquivalent des Backends der KanMind-App. Das entsprechende Frontend wurde durch das Team der Developer Akademie realisiert.',
        technologyList: ['HTML', '|', 'CSS', '|', 'JavaScript', '|', 'Django'],
        technologyImageIcons: [
            '../../../../assets/img/html-technology.svg',
            '|',
            '../../../../assets/img/css-technology.svg',
            '|',
            '../../../../assets/img/javascript-technology.svg',
            '|',
            '../../../../assets/img/django.svg'
        ],
        projectIndex: 2,
        projectIndexAsString: '03',
        projectLink: 'https://el-pollo-loco.simon-kiesner.de/index.html',
        gitHubLink: 'https://github.com/Simeon199/KanMind',
        isBackend: true,
        frontendGitHubLink: 'https://github.com/Developer-Akademie-Backendkurs/project.KanMind',
        backendGitHubLink: 'https://github.com/Simeon199/KanMind'
    },
    coderr: {
        title: 'Coderr',
        projectImageSource: '../../../../assets/img/coderr.png',
        description: 'Bei Coderr handelt es sich um ein Backend für eine Plattform für freiberufliche Entwickler, welches als kleiner Fiverr-Clon konzipiert wurde. Es baut auf einem bestehenden Frontend auf, das durch das Team der Developer Akademie zur Verfügung gestellt wurde und unterstützt CRUD-Operationen in vollem Umfang.',
        technologyList: ['HTML', '|', 'CSS', '|', 'JavaScript', '|', 'Django'],
        technologyImageIcons: [
            '../../../../assets/img/html-technology.svg',
            '|',
            '../../../../assets/img/css-technology.svg',
            '|',
            '../../../../assets/img/javascript-technology.svg',
            '|',
            '../../../../assets/img/django.svg'
        ],
        projectIndex: 3,
        projectIndexAsString: '04',
        projectLink: 'https://el-pollo-loco.simon-kiesner.de/index.html',
        gitHubLink: 'https://github.com/Simeon199/Coderr',
        isBackend: true,
        frontendGitHubLink: 'https://github.com/Developer-Akademie-Backendkurs/project.Coderr',
        backendGitHubLink: 'https://github.com/Simeon199/Coderr'
    }
}
