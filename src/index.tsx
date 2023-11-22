import ForgeUI, {
  render,
  Macro,
  MacroConfig,
  Option,
  Select,
  StatusLozenge,
  Text,
  useConfig
} from "@forge/ui";

// Defined appearance for each status.
const APPEARANCE_MAP = {
  "Draft": "default",           // gray
  "In Progress": "inprogress",  // blue
  "On Hold": "new",             // purple
  "In Review": "moved",         // yellow
  "Completed": "success",       // green
  "Rejected": "removed",        // red
}

// Configuration URI to change status selected.
const Config = () => {
  return (
    <MacroConfig>
      <Select label="Current Status" name="status">
        <Option defaultSelected label="Draft" value="Draft" />
        <Option label="In Progress" value="In Progress" />
        <Option label="On Hold" value="On Hold" />
        <Option label="In Review" value="In Review" />
        <Option label="Completed" value="Completed" />
        <Option label="Rejected" value="Rejected" />
      </Select>
    </MacroConfig>
  );
};

// Current status displayed in page.
const App = () => {
  const config = useConfig() || {status: "Draft"};
  const status = config.status;
  const appearance = APPEARANCE_MAP[status] || "default"

  return (
    <Text>
      <StatusLozenge text={status} appearance={appearance} />
    </Text>
  );
};

export const config = render(<Config />);
export const run = render(
  <Macro app={<App />} />
);

