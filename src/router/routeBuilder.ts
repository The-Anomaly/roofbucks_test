import { DashboardLayout, Layout } from "components";
import {
  About,
  AgentList,
  Contact,
  Error404,
  Finances,
  Home,
  Inbox,
  Listings,
  Marketplace,
  Overview,
  Privacy,
  Profile,
  ProfileSetup,
  Properties,
  PropertyDetails,
  Settings,
  TermsOfService,
} from "pages";
import { RouteProps } from "react-router-dom";
import { Routes } from "./routes";

// Route Builder Item Props
export interface RouteBuilderItem extends RouteProps {
  Layout?: React.FC<any>; // If you wish to add a layout to the page
  Element: React.FC;
  props?: any;
}

/**
 * ROUTE BUILDER
 *
 * ===============================================
 *
 * This is a list of all our application routes.
 *
 * A single item on this list contains the necessary Route props needed by React Router to do it's job.
 *
 * If you wish to add a new route to the application,
 * just fulfill all the necessary props needed by the RouteBuilder item. Ciao!
 *
 */
export const RouteBuilder: RouteBuilderItem[] = [
  {
    path: Routes.home,
    Element: Home,
    Layout: Layout,
    caseSensitive: true,
    props: {
      active: "home",
    },
  },
  {
    path: Routes.listing,
    Element: Listings,
    Layout: Layout,
    caseSensitive: true,
    props: {
      active: "listing",
    },
  },
  {
    path: Routes.marketplace,
    Element: Marketplace,
    Layout: Layout,
    caseSensitive: true,
    props: {
      active: "marketplace",
    },
  },
  {
    path: Routes.agents,
    Element: AgentList,
    Layout: Layout,
    caseSensitive: true,
    props: {
      active: "agents",
    },
  },
  {
    path: Routes.about,
    Element: About,
    Layout: Layout,
    caseSensitive: true,
    props: {
      active: "about",
    },
  },
  {
    path: Routes.contact,
    Element: Contact,
    Layout: Layout,
    caseSensitive: true,
    props: {
      active: "contact",
    },
  },
  {
    path: Routes.propertyListing,
    Element: PropertyDetails,
    Layout: Layout,
    caseSensitive: true,
    props: {
      active: "listing",
    },
  },
  {
    path: Routes.terms,
    Element: TermsOfService,
    Layout: Layout,
    caseSensitive: true,
    props: {
      active: "",
    },
  },
  {
    path: Routes.privacy,
    Element: Privacy,
    Layout: Layout,
    caseSensitive: true,
    props: {
      active: "",
    },
  },
  {
    path: Routes.profileSetup,
    Element: ProfileSetup,
    Layout: Layout,
    caseSensitive: true,
    props: {
      active: "",
    },
  },
  {
    path: Routes.profile,
    Element: Profile,
    Layout: Layout,
    caseSensitive: true,
    props: {
      active: "",
    },
  },
  {
    path: Routes.overview,
    Element: Overview,
    Layout: DashboardLayout,
    caseSensitive: true,
    props: {
      active: "Overview",
    },
  },
  {
    path: Routes.properties,
    Element: Properties,
    Layout: DashboardLayout,
    caseSensitive: true,
    props: {
      active: "Properties",
    },
  },
  {
    path: Routes.finances,
    Element: Finances,
    Layout: DashboardLayout,
    caseSensitive: true,
    props: {
      active: "Finances",
    },
  },
  {
    path: Routes.settings,
    Element: Settings,
    Layout: DashboardLayout,
    caseSensitive: true,
    props: {
      active: "Settings",
    },
  },
  {
    path: Routes.inbox,
    Element: Inbox,
    Layout: DashboardLayout,
    caseSensitive: true,
    props: {
      active: "Inbox",
    },
  },
  {
    path: "*",
    Element: Error404,
  },
];
