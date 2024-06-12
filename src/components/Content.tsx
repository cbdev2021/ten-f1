import { Box } from "@mui/material";
import DailyCard from "./content/DailyCard";

const Content = () => {
    const current = {
        "icon": "fog",
        "icon_num": 9,
        "summary": "Fog",
        "temperature": 9.2,
        "wind": {
            "speed": 0.6,
            "angle": 87,
            "dir": "E"
        }
    };

    return (
        <main>
            <Box className="content">
                <DailyCard current={current} />
            </Box>
        </main>
    );
}

export default Content;
