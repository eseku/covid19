import React, { useContext, useState, useEffect } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { Text, Bold } from "~/components/StyledText";
import ActionButton from "./ActionButton";
import { AppContext } from "~/context/Context";

const AssessmentQuestions = () => {
  const { questions, respondToQuestion } = useContext(AppContext);
  const [unAnsweredQuestions, setUnansweredQuestions] = useState([]);
  const [answered, setAnswered] = useState(0);

  useEffect(() => {
    const unanswered = questions.filter((el) => {
      return el?.responded === false;
    });
    setUnansweredQuestions(unanswered);
    setAnswered(5 - unanswered.length);
  }, [questions]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerWrapper}>
        <View>
          <Text style={styles.textStyle}>Self Check Up Covid-19</Text>
          <Bold style={styles.boldStyle}>Questions</Bold>
        </View>

        <View>
          <ProgressBar answered={answered} />
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <View style={styles.bodyContent}>
          <View style={styles.bodyContentHashtagSection}>
            <Bold style={styles.hashtag}>#covid19</Bold>
            <Bold style={styles.hashtag}>#selfcheckup</Bold>
          </View>
          <View style={styles.bodyContentQuestionSection}>
            <View style={styles.title}>
              <Bold style={{ fontSize: 45 }}>
                {answered < 5
                  ? unAnsweredQuestions[0]?.title
                  : "You have successfully completed 5/5 Questions!"}
              </Bold>
            </View>
            <View style={styles.body}>
              <Text style={{ fontSize: 28, color: "#C6C9DC" }}>
                {answered < 5
                  ? unAnsweredQuestions[0]?.body
                  : "Further assesment results and health advise would be sent to your email."}
              </Text>
            </View>
            {answered < 5 && (
              <View style={styles.action}>
                <View>
                  <ActionButton
                    actionName={"No"}
                    onPress={() => {
                      respondToQuestion(unAnsweredQuestions[0]?.id, false);
                    }}
                  />
                </View>
                <View>
                  <ActionButton
                    actionName={"Yes"}
                    onPress={() => {
                      respondToQuestion(unAnsweredQuestions[0]?.id, true);
                    }}
                  />
                </View>
              </View>
            )}
          </View>
        </View>
        <View style={styles.shadowView}>
          <View style={styles.shadowViewInnerTop}>
            <View style={styles.shadowViewInnerTopInner} />
          </View>
          <View style={styles.shadowViewInnerBottom}>
            <View style={styles.shadowViewInnerBottomInner}></View>
          </View>
        </View>
      </View>
    </View>
  );
};

function ProgressBar(props) {
  // const [Total]
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
      }}
    >
      <View style={{ flex: 4 }}>
        <View style={styles.progressBar}>
          <Animated.View
            style={
              ([StyleSheet.absoluteFill],
              {
                backgroundColor: "white",
                width: `${(props.answered / 5) * 100}%`,
                flexDirection: "row",
              })
            }
          >
            <Text> </Text>
          </Animated.View>
        </View>
      </View>
      <View style={{ flex: 1, paddingHorizontal: 10 }}>
        <Text style={{ alignSelf: "center", fontSize: 20, color: "white" }}>
          {props.answered}/5
        </Text>
      </View>
    </View>
  );
}

export default AssessmentQuestions;
const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 0,
    borderColor: "tomato",
    flexGrow: 1,
  },
  headerWrapper: {
    borderColor: "yellow",
    borderWidth: 0,
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  textStyle: {
    color: "#fff",
    fontSize: 18,
    paddingVertical: 5,
  },
  boldStyle: {
    color: "#fff",
    fontSize: 50,
  },
  progressBar: {
    height: 3,
    width: "100%",
    backgroundColor: "#959595",
    borderWidth: 0,
    borderRadius: 5,
  },
  bodyWrapper: {
    paddingHorizontal: 25,
    flexGrow: 1,
  },
  bodyContent: {
    backgroundColor: "#fff",
    flexGrow: 1,
    borderRadius: 10,
    padding: 30,
  },
  shadowView: {
    paddingHorizontal: 20,
    height: 30,
    backgroundColor: "transparent",
  },
  shadowViewInnerTop: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    paddingHorizontal: 20,
  },
  shadowViewInnerTopInner: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    height: 15,
  },
  shadowViewInnerBottom: {
    paddingHorizontal: 20,
  },
  shadowViewInnerBottomInner: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    height: 15,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  bodyContentHashtagSection: {
    borderWidth: 0,
    borderColor: "black",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingVertical: 10,
  },
  hashtag: {
    color: "#C6C9DC",
    marginRight: 10,
  },
  bodyContentQuestionSection: {
    borderWidth: 0,
    borderColor: "pink",
    flexGrow: 1,
  },
  title: {
    borderWidth: 0,
    borderColor: "red",
  },
  body: {
    borderWidth: 0,
    borderColor: "red",
  },
  action: {
    borderWidth: 0,
    borderColor: "red",
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
});
