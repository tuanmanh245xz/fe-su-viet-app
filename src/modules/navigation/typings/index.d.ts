export type RootNavigatorParamList = {
    //Stack
    AuthStack: undefined;
    AppStack: undefined;

    //Tab bar
    Home: undefined;
    BookingFooter: undefined;
    News: news.NewsRouteParams;
    User: undefined;

    //Screen
    Login: login.LoginRouteParams;
    Home2: undefined;
    Main: undefined;
    Register: undefined;
    ForgotPassword: forgotPassword.ForgotPasswordRouteParams;
    OTP: otpCheck.OTPCheckRequest;
    ResetPassword: resetPassword.ResetPasswordRouteParams;
    AuctionProperty: auctionProperty.AuctionPropertyRouteParams;
    Notification: undefined;
    NotificationDetail: undefined;
    AuctionPropertyDetail: auctionProperty.GetAuctionPropertyDetailRouteParams;
    AuctionDetail: auction.AuctionDetailRouteParams;
    NewsDetail: news.NewsDetailRouteParams;
    UserInfo: undefined;
    EditUserInfo: undefined;
    Bank: undefined;
    ChangePassword: undefined;
    MyAuctionProperty: undefined;
    AuctionHistory: undefined;
    About: undefined;
    Contact: undefined;
    AuctionListBiding: auction.AuctionDetailRouteParams;
    Terms: undefined;
    PrivacyPolicy: undefined;
    Organization: undefined;
    Settings: undefined;
    ChatDetail: chat.chatDetailRouteParams;
    ListHealthFacilities: undefined;
    HeathFacilityDetail: heathfacilities.HeathFacilityDetailRouteParams;
    ListSurvey: undefined;
    SurveyDetail: undefined;
    SurveyQuestions: survey.SurveysQuestionRouteParams;
    SurveyInformation: survey.SurveysInformationRouteParams;
    ListCounselors: undefined;
    CounselorDetail:  counselors.CounselorsRouteParams;
    BookingDetail: booking.BookingRouteParams;
    Forum: forums.ForumsRouteParams;
    ListContactStudent: undefined;
    ListContactCounselor: undefined;
    SurveyHistory: undefined;
    BookingHistory: undefined;
    Category: undefined;
    CategorySearch: undefined;
    Chat: undefined;
    Booking: undefined;
    Library: undefined;
    Rate: counselors.RateRouteParams;
    Calendar: calendar.CalendarRouteParams;
    MedicalUser: undefined;
    SurveyHistoryDetail: undefined;
    ForumDetailScreen: forums.ForumsDetailRouteParams;
    DetailSurveyAnswer: survey.DetailSurveyAnswerRouteParams;
    NewsFilter: undefined;
    ForumFilter: undefined;
    ForumPost: undefined
    BookingHistoryCounselor: undefined;
    UserProfile: undefined;
    BookingHistoryDetail: booking.BookingHistoryDetailRouteParams;
    BookingHistoryDetailCounselor: booking.BookingHistoryDetailRouteParams;
    BookingAdd: undefined;
};