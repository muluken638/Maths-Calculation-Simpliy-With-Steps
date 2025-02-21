export const SidebarData = {
    admin: [
      { name: "Dashboard", link: "/dashboard", permission: "canViewDashboard" },
      
      {
        name: "Number Theory",
        permission: "canNumberTheory",
        submenu: [
          { name: "Fibonacci Series", link: "/fibonacci" },
          { name: "Prime Number", link: "/prime" },
          { name: "Factorial", link: "/factorial" },
          { name: "GCD $ LCM", link: "/gcdlcm" },
        ],
      },
      {
        name: "Algebra and Arthmetic",
        permission: "canAlgebraAndArthmetic",
        submenu: [
          { name: "Basic Operation", link: "/basic" },
          { name: "Exponential", link: "/exponential" },
          { name: "Logarithm", link: "/logarithm" },
          { name: "Quadratic", link: "/quaadrtic" },
        ],
      },
      {
        name: "Probability & Statistics",
        permission: "canProbabilityStatistics",
        submenu: [
          { name: "Mean Median & Mode", link: "/meanmedianmode" },
          { name: "Probability", link: "/probability" },
          { name: "Combination", link: "/combination" },
          { name: "deviation", link: "/deviation" },
        ],
      },  {
        name: "Pattern Recognation & Reccursion",
        permission: "canpatterRecognation",
        submenu: [
          { name: "Anagram Finder", link: "/anagram" },
          { name: "PalindromeChecker", link: "/palidrome" },
          { name: "PascalsTriangle", link: "/pascaltrangle" },
          { name: "TowerOfHanoi", link: "/towerofhanoi" },
        ],
      },
      
     ],
    manager: [
      { name: "Dashboard", link: "/dashboard", permission: "canViewDashboard" },
      {
        name: "Driver Management",
        permission: "canManagedriver",
        submenu: [
          { name: "Add Driver", link: "/driver/add" },
          { name: "Edit Driver", link: "/driver/edit" },
          { name: "View driver", link: "/driver/view" },
        ],
      },
      {
        name: "Order Management",
        permission: "canManageOrders",
        submenu: [
          { name: "View Orders", link: "/orders/view" },
          { name: "Track Orders", link: "/orders/track" },
        ],
      },
      { name: "Inventory Management", link: "/inventory", permission: "canManageInventory" },
      { name: "Reports & Analytics", link: "/reports", permission: "canViewReports" },
      { name: "Team Management", link: "/team", permission: "canManageTeam" },
    ],
    user: [
      { name: "Dashboard", link: "/dashboard", permission: "canViewDashboard" },
      { name: "Driver Browsing", link: "/driver", permission: "canBrowsedriver" },
      {
        name: "Order Management",
        permission: "canManageOrders",
        submenu: [
          { name: "View Orders", link: "/orders/view" },
          { name: "Track Orders", link: "/orders/track" },
          { name: "Cancel Orders", link: "/orders/cancel" },
        ],
      },
      { name: "Profile Management", link: "/profile", permission: "canManageProfile" },
      { name: "Notifications", link: "/notifications", permission: "canViewNotifications" },
    ],
  };