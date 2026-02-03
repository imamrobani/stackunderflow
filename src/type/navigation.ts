// Root stack
export type RootStackParamList = {
  Login: undefined;
  MainTab:
    | {
        screen: keyof MainTabParamList;
        params?: MainTabParamList[keyof MainTabParamList];
      }
    | undefined;
  AskQuestion:
    | {
        question?: {
          id: string;
          title: string;
          description: string;
        };
      }
    | undefined;
  QuestionDetail: { id: string };
};

// ======================
// Main Tab Navigation
// ======================
export type MainTabParamList = {
  Home: undefined;
  Profile: undefined;
};
