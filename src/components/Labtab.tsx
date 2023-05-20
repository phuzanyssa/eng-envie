import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { ThemeProvider } from "@mui/material/styles";
import themeEng from "@styles/theme";
import { Typography } from "@mui/material";

interface IProp {
  title: String;
}

const Labtab = ({ title }) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={themeEng}>
      <Box
        sx={{ width: "100%" }}
        className="tabbox z-1 bg-white-sup h-fit rounded-2xl shadow-2xl"
      >
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
            }}
            className="subtabbox z-10 flex flex-row rounded-t-2xl"
          >
            {title.map((_data) => (
              <TabList
                key="tab"
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="primary"
                aria-label="lab API tabs example"
              >
                <Tab
                  label={
                    <Typography
                      variant="h6"
                      color="#454545"
                      className="boxTopic hover:animate-jelly hover:text-yellow-main"
                    >
                      {_data.title}
                    </Typography>
                  }
                  value={_data.value}
                />
              </TabList>
            ))}
          </Box>

          {title.map((_data) => (
            <TabPanel value={_data.value} key="info">
              <Typography variant="body1">{_data.infor}</Typography>
            </TabPanel>
          ))}
        </TabContext>
      </Box>
    </ThemeProvider>
  );
};

export default Labtab;
