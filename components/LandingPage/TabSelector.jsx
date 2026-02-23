import React from "react";
import { Tabs, TabsHeader, Tab } from "@material-tailwind/react";

const TabSelector = ({ activeTab, setActiveTab, tabData,isAdmin }) => {
  return (
    <div className="mt-5 flex lg:flex-row lg:justify-center lg:items-start  px-2 flex-col items-center">
      <Tabs className="w-full mt-5" value={activeTab}>
        <div className="w-full flex justify-between lg:flex-row flex-col items-center">
          <TabsHeader
            className="rounded-none border-b border-border bg-transparent p-0 h-16"
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-accent shadow-none rounded-none",
            }}
          >
            {tabData.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={`text-base hover:cursor-pointer px-5 ml-2 whitespace-nowrap ${
                  activeTab === value
                    ? "font-bold text-accent"
                    : "text-foreground"
                } ${label === "Archive" && !isAdmin ? "hidden" : ""}`}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
        </div>
      </Tabs>
    </div>
  );
};

export default TabSelector;
