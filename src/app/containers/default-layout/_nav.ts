import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },



  {
    title: true,
    name: 'Dashboard Managment'
  },

  {
    name: 'Categorie',
    url: '/categorie',
    iconComponent: { name: 'cilList' },
    children: [
      {
        name: 'Categorie',
        url: '/categorie/categorie'
      },

    ]
  },
  {
    name: 'Service',
    url: '/service',
    iconComponent: { name: 'cilTags' },
    children: [
      {
        name: 'Service',
        url: '/service/Service'
      },

    ]
  },
  {
    name: 'Type de service',
    url: '/TypeService',
    iconComponent: { name: 'cilTags' },
    children: [
      {
        name: 'Type de service',
        url: '/TypeService/ServicetypeBack'
      },

    ]
  },
  {
    name: 'Utilisateur',
    url: '/user',
    iconComponent: { name: 'cilUser' },
    children: [
      {
        name: 'Utilisateur',
        url: '/user/Utilisateur'
      },
      

    ]
  },
  {
    name: 'Offre',
    url: '/Offres',
    iconComponent: { name: 'cilTags' },
    children: [
      {
        name: 'Ajouter Offre',
        url: '/Offres/ServiceTypeToOffre'
      },
      {
        name: 'Offre',
        url: '/Offres/ActiverOffre'
      },

    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Badges',
        url: '/notifications/badges',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Modal',
        url: '/notifications/modal',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Toast',
        url: '/notifications/toasts',
        icon: 'nav-icon-bullet'
      }
    ]
  },


];
