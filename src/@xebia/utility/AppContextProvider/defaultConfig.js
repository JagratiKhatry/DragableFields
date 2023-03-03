import languageData from '@xebia/core/AppLngSwitcher/data';
import {
  Fonts,
  FooterType,
  HeaderType,
  LayoutDirection,
  LayoutType,
  MenuStyle,
  NavStyle,
  RouteTransition,
  ThemeMode,
  ThemeStyle,
  ThemeStyleRadius,
} from 'shared/constants/AppEnums';


export const textLight = {
  primary: '#000000',
  secondary: '#5A7A8B',
  disabled: '#8098A6',
  headings: "#14415A",
  headingbg: "#94D5D9",
}

export const textDark = {
  primary: 'rgb(255,255,255)',
  secondary: 'rgb(229, 231, 235)',
  disabled: 'rgb(156, 163, 175)',
};

export const backgroundDark = {
  paper: '#2B3137',
  default: '#1F2527',
};

export const backgroundLight = {
  paper: '#FFFFFF',
  default: '#F4F7FE',
};
export const tableStyle = {
  height: 400,
  width: '100%',
};
export const tableDisplay = {
  height: 400,
  width: '100%',
};
const cardRadius = ThemeStyleRadius.STANDARD;
export const defaultTheme = {
  theme: {
    spacing: 4,
    cardRadius: cardRadius,
    direction: process.env.REACT_APP_DEFAULT_LANGUAGE === 'ar' ? LayoutDirection.RTL : LayoutDirection.LTR,
    palette: {
      mode: ThemeMode.LIGHT,
      background: {
        paper: '#FFFFFF',
        default: '#f1f1f1',
      },
      primary: {
        main: '#147E82',
        dark: '#0C5659',
        contrastText: '#F4FFFF',
        light: '#73ADB1',
      },
      secondary: {
        main: '#F04F47',
      },
      error: {
        main: '#E91B0C',
        light: '#E57373',
        dark: "#C7170A",
        contrastText: '#FDECEB',
        content: "#621B16",
      },
      success: {
        main: "#3A833C",
        light: "#81C784",
        dark: "#327137",
        contrastText: "#EDF7EE",
        content: "#1E4620",
      },
      warning: {
        main: '#FF9800',
        light: '#FFB74D',
        dark: "#F57C00",
        contrastText: '#FFF5E6',
        content: "#663D00",
      },
      info: {
        main: '#0B78D0',
        light: '#64B5F6',
        dark: "#0961AA",
        contrastText: '#E9F5FE',
        content: "#0D3C61",
      },
      text: textLight,
      gray: {
        50: '#fafafa',
        100: '#F5F6FA',
        200: '#edf2f7',
        300: '#858585',
        400: '#000000',
        500: '#008080',  // color for archive 
        600: '#008080', // color for archive Hover
        700: '#cccccc', // color for left nav 
        800: '#000000',  // color for left nav  hover   
        900: '#ededed',  // color for left nav  hover    
        A100: '#d5d5d5',
        A200: '#aaaaaa',
        A400: '#303030',
        A700: '#616161',
      },
    },
    status: {
      danger: 'orange',
    },
    divider: '#DEE1E3',
    typography: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontSize: 14,
      fontWeight: 400,
      h1: {
        fontSize: 22,
        fontWeight: 600,
      },
      h2: {
        fontSize: 20,
        fontWeight: 500,
      },
      h3: {
        fontSize: 18,
        fontWeight: 500,
      },
      h4: {
        fontSize: 16,
        fontWeight: 500,
      },
      h5: {
        fontSize: 14,
        fontWeight: 500,
      },
      h6: {
        fontSize: 12,
        fontWeight: 500,
      },
      subtitle1: {
        fontSize: 14,
      },
      subtitle2: {
        fontSize: 16,
      },
      body1: {
        fontSize: 14,
      },
      body2: {
        fontSize: 12,
      },
    },
    components: {
      MuiToggleButton: {
        styleOverrides: {
          root: {
            borderRadius: cardRadius,
          },
        },
      },
      MuiCardLg: {
        styleOverrides: {
          root: {
            // apply theme's border-radius instead of component's default
            borderRadius:
              cardRadius === ThemeStyleRadius.STANDARD
                ? ThemeStyleRadius.STANDARD
                : ThemeStyleRadius.MODERN + 20,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: cardRadius,
            boxShadow: '0px 10px 10px 4px rgba(0, 0, 0, 0.04)',
            '& .MuiCardContent-root:last-of-type': {
              paddingBottom: 16,
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: cardRadius / 2,
            // boxShadow: '0px 5px 6px rgba(0, 0, 0, 0.04)',
            textTransform: 'capitalize',
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: cardRadius / 2,
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            borderRadius: cardRadius / 2,
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            padding: 9,
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            fontWeight: Fonts.REGULAR,
          },
        },
      },
    },
  },
};
export const DarkSidebar = {
  sidebarBgColor: '#313541',
  sidebarTextColor: '#fff',
  sidebarHeaderColor: '#313541',
  sidebarMenuSelectedBgColor: '#F4F7FE',
  sidebarMenuSelectedTextColor: 'rgba(0, 0, 0, 0.87)',
  mode: ThemeMode.DARK,
};
export const LightSidebar = {
  sidebarBgColor: '#fff',
  sidebarTextColor: 'rgba(0, 0, 0, 0.60)',
  sidebarHeaderColor: '#fff',
  sidebarMenuSelectedBgColor: '#F4F7FE',
  sidebarMenuSelectedTextColor: 'rgba(0, 0, 0, 0.87)',
  mode: ThemeMode.LIGHT,
};
const defaultConfig = {
  sidebar: {
    borderColor: '#757575',
    menuStyle: MenuStyle.DEFAULT,
    isSidebarBgImage: false,
    sidebarBgImage: 1,
    colorSet: LightSidebar,
  },
  themeStyle: ThemeStyle.STANDARD,
  themeMode: ThemeMode.LIGHT,
  navStyle: NavStyle.STANDARD,
  layoutType: LayoutType.FULL_WIDTH,
  footerType: FooterType.FLUID,
  headerType: HeaderType.FIXED,
  rtAnim: RouteTransition.NONE,
  footer: false,
  locale: process.env.REACT_APP_DEFAULT_LANGUAGE === 'ar' ? languageData[1] : languageData[0],
  rtlLocale: ['ar'],
};
export default defaultConfig;
