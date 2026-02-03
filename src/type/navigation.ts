// Root stack
export type RootStackParamList = {
  Login: undefined;
  MainTab:
    | {
        screen: keyof MainTabParamList;
        params?: MainTabParamList[keyof MainTabParamList];
      }
    | undefined;
  QuestionDetail: undefined;
};

// ======================
// Main Tab Navigation
// ======================
export type MainTabParamList = {
  Home: undefined;
  Profile: undefined;
};
