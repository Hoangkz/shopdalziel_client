// Chakra imports
import { Box, Portal, useDisclosure } from "@chakra-ui/react";
// Layout components
import { useState } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import routes from "routes.js";

export default function Dashboard(props) {
  const { ...rest } = props;
  const location = useLocation();
  // states and functions
  const [fixed] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/hocvien") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      if (prop.collapse) {
        return getRoutes(prop.items);
      }
      if (prop.category) {
        return getRoutes(prop.items);
      } else {
        return null;
      }
    });
  };
  const { onOpen } = useDisclosure();
  return (
    <Box>
      <SidebarContext.Provider
        value={{
          toggleSidebar,
          setToggleSidebar,
        }}
      >
        <Sidebar routes={routes} display="none" {...rest} />
        <Box
          float="right"
          minHeight="100vh"
          height="100%"
          overflow="auto"
          position="relative"
          maxHeight="100%"
          w={{ base: "100%", xl: "calc( 100% - 290px )" }}
          maxWidth={{ base: "100%", xl: "calc( 100% - 290px )" }}
          transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
          transitionDuration=".2s, .2s, .35s"
          transitionProperty="top, bottom, width"
          transitionTimingFunction="linear, linear, ease"
        >
          <Portal>
            <Box>
              <Navbar
                onOpen={onOpen}
                logoText={"MCI Vietnam"}
                brandText={getActiveRoute(routes)}
                secondary={getActiveNavbar(routes)}
                message={getActiveNavbarText(routes)}
                fixed={fixed}
                {...rest}
              />
            </Box>
          </Portal>

          {getRoute() ? (
            <Box
              mx="auto"
              p={{ base: "20px", md: "30px" }}
              pe="20px"
              minH="100vh"
              pt="50px"
            >
              <Switch>
                {getRoutes(routes)}
                {getRoutes([
                  {
                    name: "Question",
                    layout: "/hocvien",
                    path: "/forum/question/:id",
                    component: QuestionDetail,
                  },
                  {
                    name: "Forum",
                    layout: "/hocvien",
                    path: "/forum/:id",
                    component: Forum,
                  },
                  {
                    name: "AddFeedback",
                    layout: "/hocvien",
                    path: "/add-feedback/",
                    component: AddFeedback,
                  },
                  {
                    name: "FreeCourse",
                    layout: "/hocvien",
                    path: "/free-course/:slug",
                    component: FreeCourseDetail,
                  },
                  {
                    name: "EventVideo",
                    layout: "/hocvien",
                    path: "/event-video/:slug",
                    component: EventVideoDetail,
                  },
                  {
                    name: "BlogDetail",
                    layout: "/hocvien",
                    path: "/blog-detail/:slug",
                    component: BlogDetail,
                  },
                  ])}
                <Redirect from="/" to="/home" />
              </Switch>
            </Box>
          ) : null}
          <Box>
            <Footer />
          </Box>
        </Box>
      </SidebarContext.Provider>
    </Box>
  );
}
