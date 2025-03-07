import React from "react";

import { 
    SummaryContainer,
    Count,
    CategoryLabel,
    PersonalCategoryBox,
    OfficialCategoryBox
} from "./task-category.styles";

const TaskCategory = ({ tasks }) => {
    const personalCount = tasks.filter(task => task.category === 'Personal').length;
    const officialCount = tasks.filter(task => task.category === 'Official').length;

    return (
        <SummaryContainer>
            <PersonalCategoryBox>
                <Count>{personalCount}</Count>
                <CategoryLabel>Personal</CategoryLabel>
            </PersonalCategoryBox>
            <OfficialCategoryBox>
                <Count>{officialCount}</Count>
                <CategoryLabel>Official</CategoryLabel>
            </OfficialCategoryBox>
        </SummaryContainer>
    );
}

export default TaskCategory;