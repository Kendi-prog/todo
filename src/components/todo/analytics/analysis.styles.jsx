import styled from 'styled-components';
import { Bell } from 'lucide-react';

export const AnalyticsContainer = styled.div`
  position: relative;
  width: 200px;
  text-align: center;
`;

export const ProfileSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const NotificationBell = styled(Bell)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 10px; 
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
`;

export const UserInfo = styled.div`
  text-align: right;
  margin-right: 10px;
`;

export const UserName = styled.p`
  margin: 0;
  font-weight: bold;
`;

export const UserSettings = styled.p`
  margin: 0;
  font-size: 12px;
  color: gray;
`;

export const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ccc;
`;

export const ProgressContainer = styled.div`
  width: 150px;
  height: 150px;
  margin-left: 80px;
`;

export const TaskCompletionText = styled.p`
  margin-left: 100px;

  font-weight: bold;
`;

export const PosterContainer = styled.div`
  margin-top: 20px;
  margin-left: 20px;
`;

export const PosterText = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
  display: block;
  text-align: center;
`;

export const PosterImage = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 10px;
  margin-top: 10px;
`;