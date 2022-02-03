import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { tabItems } from "./Header";

const MyTabs = ({ value, onChange }) => {
  return (
    <Tabs
      value={value}
      onChange={onChange}
      TabIndicatorProps={{ style: { display: "none" } }}
      aria-label="navigation tabs"
    >
      {tabItems.map((item, index) => (
        <Tab
          key={`${item.text}-${index}`}
          label={item.text}
          sx={{
            "&.Mui-selected": {
              color: "secondary.dark",
            },
          }}
        />
      ))}
    </Tabs>
  );
};

export default MyTabs;
