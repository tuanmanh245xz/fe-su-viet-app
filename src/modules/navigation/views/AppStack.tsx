import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootNavigatorParamList } from "../typings";
import Screen from "../src/constants";

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

export const AppStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, animation: 'slide_from_right'}}
        >
            <Stack.Screen name='Main' component={Screen.Main}/>

            {/* <Stack.Screen name='NewsDetail' component={Screen.NewsDetail}/>

            <Stack.Screen name='UserInfo' component={Screen.UserInfo}/>

            <Stack.Screen name='EditUserInfo' component={Screen.EditUserInfo}/>

            <Stack.Screen name='ChangePassword' component={Screen.ChangePassword}/>

            <Stack.Screen name='Notification' component={Screen.Notification}/>

            <Stack.Screen name='NotificationDetail' component={Screen.NotificationDetail}/>

            <Stack.Screen name='About' component={Screen.About}/>

            <Stack.Screen name='Contact' component={Screen.Contact}/>

            <Stack.Screen name='PrivacyPolicy' component={Screen.PrivacyPolicy}/>

            <Stack.Screen name='Organization' component={Screen.Organization}/>

            <Stack.Screen name='Settings' component={Screen.Settings}/>

            <Stack.Screen name='ChatDetail' component={Screen.ChatDetail}/>

            <Stack.Screen name='ListHealthFacilities' component={Screen.ListHealthFacilities} />

            <Stack.Screen name='HeathFacilityDetail' component={Screen.HealthFacilityDetail} />

            <Stack.Screen name='ListSurvey' component={Screen.ListSurvey}/>

            <Stack.Screen name='SurveyDetail' component={Screen.SurveyDetail}/>

            <Stack.Screen name='SurveyQuestions' component={Screen.SurveyQuestions}/>

            <Stack.Screen name='SurveyInformation' component={Screen.SurveyInformation}/>

            <Stack.Screen name='ListCounselors' component={Screen.ListCounselors}/>

            <Stack.Screen name='CounselorDetail' component={Screen.CounselorDetail}/>

            <Stack.Screen name='ListContactStudent' component={Screen.ListContactStudentScreen}/>

            <Stack.Screen name='ListContactCounselor' component={Screen.ListContactCounselor}/>

            <Stack.Screen name='BookingHistory' component={Screen.BookingHistory}/>

            <Stack.Screen name='Booking' component={Screen.Booking}/>

            <Stack.Screen name='SurveyHistory' component={Screen.SurveyHistory}/>

            <Stack.Screen name='Category' component={Screen.Category}/>

            <Stack.Screen name='CategorySearch' component={Screen.CategorySearch}/>

            <Stack.Screen name='User' component={Screen.User} options={{ animation:"fade_from_bottom" }}/>
            
            <Stack.Screen name='Forum' component={Screen.Forum}/>

            <Stack.Screen name='Library' component={Screen.Library}/>

            <Stack.Screen name='Rate' component={Screen.Rate}/>

            <Stack.Screen name='Calendar' component={Screen.Calendar}/>

            <Stack.Screen name='Chat' component={Screen.Chat}/>

            <Stack.Screen name='SurveyHistoryDetail' component={Screen.SurveyHistoryDetail}/>

            <Stack.Screen name='ForumDetailScreen' component={Screen.ForumDetailScreen}/>

            <Stack.Screen name='DetailSurveyAnswer' component={Screen.DetailSurveyAnswer}/>

            <Stack.Screen name='NewsFilter' component={Screen.NewsFilterScreen}/>

            <Stack.Screen name='ForumFilter' component={Screen.ForumFilterScreen}/>

            <Stack.Screen name='ForumPost' component={Screen.ForumPostScreen}/>
            
            <Stack.Screen name='BookingHistoryCounselor' component={Screen.BookingHistoryCounselor}/>

            <Stack.Screen name='UserProfile' component={Screen.UserProfile}/>

            <Stack.Screen name='BookingHistoryDetail' component={Screen.BookingHistoryDetail}/>

            <Stack.Screen name='BookingHistoryDetailCounselor' component={Screen.BookingHistoryDetailCounselor}/>
            
            <Stack.Screen name='BookingAdd' component={Screen.BookingDetail}/>
         */}
        </Stack.Navigator>
    );
  };