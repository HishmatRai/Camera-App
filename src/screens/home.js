import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
export default class Home extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        const image = { uri: 'https://reactjs.org/logo-og.png' };
        let UserData = [
            { name: "Stella Malone", seen: "1263", love: "12.5k", like: "1.8k", profileImg: "require('./../../assets/profile1.png')" },
            { name: "Stella Malone", seen: "1263", love: "12.5k", like: "1.8k", profileImg: "require('./../../assets/profile1.png')" },
            { name: "Stella Malone", seen: "1263", love: "12.5k", like: "1.8k", profileImg: "require('./../../assets/profile1.png')" },
        ]
        return (
            <View style={styles.container}>
                <StatusBar barStyle="white" hidden={false} backgroundColor="#242a37" translucent={true} />
                {/* >>>>>>>>>>>>>>>>> Body <<<<<<<<<<<<<<<<<<< */}
                    <View style={styles.body_main}>
                        {/* >>>>>>>>>>>>>>>>> LIVE BUTTON <<<<<<<<<<<<<<<<<<< */}
                        <View style={styles._live_follow_btn_main}>
                            <TouchableOpacity style={styles._live_btn}>
                                <Text style={styles._live_btn_txt}>LIVE</Text>
                                <Text style={styles._live_btn_dot}></Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles._live_btn}>
                                <Text style={styles._follow_btn_txt}>RECOMMENDED</Text>
                                <Text style={styles._live_btn_dot}></Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles._live_btn}>
                                <Text style={styles._follow_btn_txt}>FOLLOW</Text>
                                <Text style={styles._live_btn_dot}></Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView>
                        {/* >>>>>>>>>>>>>>>>> USER <<<<<<<<<<<<<<<<<<< */}
                        {
                            UserData.map((v, i) => {
                                return (
                                    <View style={styles._user_main}>
                                        <ImageBackground source={require('./../../assets/img1.png')} style={styles.image}>
                                            <View style={styles._user_main2}>
                                                <View style={styles._name_profile_main}>
                                                    <Image source={require('./../../assets/profile1.png')} style={styles.profile_img} />
                                                    <View style={styles._usr_name_main}>
                                                        <Text style={styles._user_name}>{v.name}</Text>
                                                        <View style={styles._seen_main}>
                                                            <AntDesign name="eye" size={15} color="#F99F3D" />
                                                            <Text style={styles._seen_count}>{v.seen}</Text>
                                                        </View>
                                                    </View>
                                                    <TouchableOpacity style={styles._add_p_icon}>
                                                        <Entypo name="plus" size={24} color="white" />
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={styles._users_show_main}>
                                                    <TouchableOpacity style={styles._add_icon}>
                                                        <Feather name="more-horizontal" size={24} color="#61402A" />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles._add_icon2}>
                                                        <Image source={require('./../../assets/profile1.png')} style={styles.profile_img} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles._add_icon2}>
                                                        <Image source={require('./../../assets/profile1.png')} style={styles.profile_img} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles._add_icon2}>
                                                        <Image source={require('./../../assets/profile1.png')} style={styles.profile_img} />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            {/* ======================< >======================= */}
                                            <View style={styles._love_icons_main}>
                                                <TouchableOpacity >
                                                    <AntDesign name="heart" size={24} color="white" />
                                                </TouchableOpacity>
                                                <Text style={styles._love_counter}>{v.love}</Text>
                                                <TouchableOpacity>
                                                    <Ionicons name="chatbubble-ellipses" size={24} color="white" />
                                                </TouchableOpacity>
                                                <Text style={styles._love_counter}>{v.like}</Text>
                                            </View>
                                        </ImageBackground>
                                    </View>
                                )
                            })
                        }
                        <View style={{paddingBottom:190}}></View>
                        </ScrollView>
                    </View>
                {/* >>>>>>>>>>>>>>>>> Tab bar <<<<<<<<<<<<<<<<<<< */}
                <View style={styles._tab_main}>
                    <View style={styles._tab_show}>
                        <TouchableOpacity>
                            <Image source={require('./../../assets/Navigation_Icons/home_selected.png')} style={styles._home_icon} />
                            <Text style={styles._tab_selected_text}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('./../../assets/Navigation_Icons/SearchWhite.png')} style={styles._home_icon} />
                            <Text style={styles._tab_text}>Search</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('./../../assets/Navigation_Icons/Camera.png')} style={styles._camera_icon} />
                            {/* <Text style={styles._tab_text}>Home</Text> */}
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('./../../assets/Navigation_Icons/InboxWhite.png')} style={styles._home_icon} />
                            <Text style={styles._tab_text}>Inbox</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('./../../assets/Navigation_Icons/MeWhite.png')} style={styles._home_icon} />
                            <Text style={styles._tab_text}>Me</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles._line}></Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#242a37",

    },
    //   tab bar
    _tab_main: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: "#212530",
    },
    _line: {
        backgroundColor: "white",
        height: 10,
        width: "50%",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 20,
        marginBottom: 10,
        marginTop: 20
    },
    _home_icon: {
        width: 25,
        height: 25,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
    _camera_icon: {
        width: 70,
        height: 55,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
    _tab_show: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",

    },
    _tab_text: {
        color: "white",
        textAlign: "center",
        marginTop: 5,
        alignItems: "center",
        alignSelf: "center"
    },
    _tab_selected_text: {
        color: "#ebad4a",
        textAlign: "center",
        marginTop: 5,
        alignItems: "center",
        alignSelf: "center"
    },
    body_main: {
        margin: 12
    },
    _live_follow_btn_main: {
        flexDirection: "row",
        marginTop: 30,
        width: "86%",
        alignSelf: "center",
        justifyContent: "space-between",
    },
    _live_btn_txt: {
        color: "white",
        paddingRight: 10,
        fontWeight: "bold"

    },
    _follow_btn_txt: {
        color: "#848484",
        paddingRight: 10,
        fontWeight: "normal"

    },
    _live_btn_dot: {
        width: 10,
        height: 10,
        backgroundColor: "#FABC4F",
        borderRadius: 100
    },
    _live_btn: {
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-between",
    },
    _user_main: {
        width: "100%",
        height: 300,
        borderRadius: 20,
        // alignItems: "center",
        // alignSelf: "center",
        marginTop: 15,
    },
    _user_main2: {
        flexDirection: "row",
        justifyContent: "space-between",
        // alignSelf: "center",
        alignItems: "center",
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 5,
        paddingRight: 5
    },
    _users_show_main: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "35%",
        alignItems: "center",
        padding: 5,

    },
    _name_profile_main: {
        backgroundColor: "#433a33",
        // opacity: 0.7,
        borderRadius: 100,
        padding: 5,
        flexDirection: "row",
        width: "55%",
        alignItems: "center",

    },
    _add_icon: {
        backgroundColor: "white",
        width: 34,
        height: 34,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        marginRight: -1

    },
    _add_icon2: {
        backgroundColor: "white",
        width: 34,
        height: 34,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: -10
    },
    profile_img: {
        width: 33,
        height: 33,
        borderRadius: 100
    },
    image: {
        // flex: 1,
        resizeMode: 'cover',
        width: "100%",
        height: 300,
        borderRadius: 100,
    },
    _usr_name_main: {
        marginLeft: 10,
    },
    _user_name: {
        fontSize: 15,
        fontWeight: "normal",
        color: "white"

    },
    _seen_main: {
        flexDirection: "row",
        alignItems: "center"
    },
    _seen_count: {
        color: "white",
        paddingLeft: 5
    },
    _add_p_icon: {
        backgroundColor: "#F99F3D",
        borderRadius: 100,
        width: 30,
        height: 30,
        marginLeft: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    _love_icons_main: {
        flexDirection: "row",
        marginTop: 150,
        width: "80%",
        marginLeft: "10%",
        alignItems: "center"
    },
    _love_counter: {
        color: "white",
        marginLeft: 10,
        marginRight: 10,
        fontSize: 15
    }
});
