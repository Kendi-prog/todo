import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import { 
    AnalyticsContainer, 
    ProfileSection,
    NotificationBell, 
    Profile, 
    UserAvatar, 
    UserInfo, 
    UserName, 
    UserSettings, 
    TaskCompletionText, 
    ProgressContainer,
    PosterContainer,
    PosterImage, 
} from './analytics.styles';
import webinar from '../../../assets/webinar.jpeg';


const Analytics = ({ tasks }) => {
    const completedTasks = tasks.filter(task => task.completed);
    const totalTasks = tasks.length;
    const completionPercentage = Math.round((completedTasks.length / totalTasks) * 100);

    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const progressOffset = ((100 - completionPercentage) / 100) * circumference;
    console.log(progressOffset);

    return(
        <AnalyticsContainer>
            <ProfileSection>
                <NotificationBell />
                <Profile>
                    <UserInfo>
                        <UserName>Leila Kendi</UserName>
                        <UserSettings>My Settings</UserSettings>
                    </UserInfo>
                    <UserAvatar />
                </Profile> 
            </ProfileSection>
            <TaskCompletionText>Goal</TaskCompletionText>
            <ProgressContainer>
                <CircularProgressbar 
                    value={completionPercentage}
                    text={`${completionPercentage}%`}
                    styles={buildStyles({
                        textSize: "15px",
                        textAlign: "center",
                        textAnchor: "middle",
                        pathColor: `#7600bc`,
                        textColor: "#333",
                        trailColor: "#E7DDF0",
                        strokeLinecap: "round",
                    })} 
                />
            </ProgressContainer>
            < TaskCompletionText>Task Completion</TaskCompletionText>
            <PosterContainer>
                {/* <PosterText>Welcome to our Productivity Webinar</PosterText> */}
                <PosterImage src={webinar} alt="Productivity Poster" />
            </PosterContainer>
        </AnalyticsContainer>
    )
}

export default Analytics;