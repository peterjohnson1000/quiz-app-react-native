import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native"
import { NavigationProp } from '@react-navigation/native';

interface Props {
    navigation: NavigationProp<Record<string, object>>;
}

const Quiz = ({ navigation }: Props) => {
    const [quesitons, setQuestions] = useState();
    const [options, setOptions] = useState([]);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [score, setScore] = useState(0);

    const getQuiz = async () => {
        const response = await fetch("https://opentdb.com/api.php?amount=10&category=18&type=multiple&encode=url3986");
        const data = await response.json();
        // console.log(data.results[0]);
        setQuestions(data.results)
        setOptions(optionsCombiner(data.results[0]))

    }

    useEffect(() => {
        getQuiz();
    }, [])

    const nextQuestion = () => {
        setQuestionNumber(questionNumber + 1);
        setOptions(optionsCombiner(quesitons[questionNumber + 1]));
    }

    const optionShuffler = (options) => {
        for (let i = options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [options[i], options[j]] = [options[j], options[i]];
        }
    }

    const optionsCombiner = (questions) => {
        const options = [...questions.incorrect_answers]
        options.push(questions.correct_answer)
        // console.log(options, "before");
        optionShuffler(options)
        // console.log(options, "after");
        return options
    }

    const handleSelectedOptions = (option) => {
        if (option === quesitons[questionNumber].correct_answer) {
            setScore(score + 1);

        }
        setQuestionNumber(questionNumber + 1);
        setOptions(optionsCombiner(quesitons[questionNumber + 1]));
    }
    console.log(score);
    return (
        <View style={{ height: "100%", alignItems: "center", paddingTop: 50 }}>
            {
                quesitons && <View style={{ height: "100%" }}>
                    <Text style={{ fontSize: 30, marginBottom: 50, marginHorizontal: 10 }}>Q.{decodeURIComponent(quesitons[questionNumber].question)}</Text>
                    <View style={{ marginVertical: 20, alignItems: "center" }}>
                        <TouchableOpacity onPress={() => { handleSelectedOptions(options[0]) }}>
                            <Text style={{ backgroundColor: "#19376D", paddingHorizontal: 130, color: "white", paddingVertical: 20, borderRadius: 25, marginBottom: 20 }}>{decodeURIComponent(options[0])}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { handleSelectedOptions(options[1]) }}>
                            <Text style={{ backgroundColor: "#19376D", paddingHorizontal: 130, color: "white", paddingVertical: 20, borderRadius: 25, marginBottom: 20 }}>{decodeURIComponent(options[1])}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { handleSelectedOptions(options[2]) }}>
                            <Text style={{ backgroundColor: "#19376D", paddingHorizontal: 130, color: "white", paddingVertical: 20, borderRadius: 25, marginBottom: 20 }}>{decodeURIComponent(options[2])}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { handleSelectedOptions(options[3]) }}>
                            <Text style={{ backgroundColor: "#19376D", paddingHorizontal: 130, color: "white", paddingVertical: 20, borderRadius: 25, marginBottom: 20 }}>{decodeURIComponent(options[3])}4</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", marginVertical: 10, marginHorizontal: 10 }}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 15, backgroundColor: "#19376D", color: "white", borderRadius: 25, paddingHorizontal: 25, paddingVertical: 15 }}>Skip</Text>
                            </TouchableOpacity>
                            {questionNumber !== 9 && < TouchableOpacity onPress={nextQuestion}>
                                <Text style={{ fontSize: 15, backgroundColor: "#19376D", color: "white", borderRadius: 25, paddingHorizontal: 25, paddingVertical: 15 }}>Next</Text>
                            </TouchableOpacity>}
                            {questionNumber === 9 && < TouchableOpacity>
                                <Text style={{ fontSize: 15, backgroundColor: "green", color: "white", borderRadius: 25, paddingHorizontal: 25, paddingVertical: 15 }}>End</Text>
                            </TouchableOpacity>}
                        </View>
                    </View>
                </View>
            }

        </View >
    );
};

export default Quiz;