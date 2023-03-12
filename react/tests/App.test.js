import React from "react";
import App from "../App";
import { shallow, mount } from "enzyme";


var wrapper;
describe('Testing App Component', () => {

   // App Component renders without crashing 
    test('testcase1', () => {
        wrapper = mount(<App />);
        expect(wrapper.instance()).toBeDefined();
        wrapper.unmount();
    });

    // Testing the Start Quiz button 

    test('testcase2', () => {
        wrapper = mount(<App />);
        expect(wrapper.find('h1').text()).toBe('Quizz App');
        expect(wrapper.find('button').instance()).toBeDefined();
        wrapper.unmount();
    });

    // Checking the UI after clicking the Start Quiz button

    test('testcase3', () => {
        wrapper = mount(<App />);
        wrapper.find('Button').simulate('click')
        wrapper.find('Button').forEach(node => {
            expect(node.text()).not.toBe('Start Quiz');
        })
        wrapper.unmount();
    });

    // After finishing all the questions, checking whether the show result button shows up

    test('testcase4', () => {
        wrapper = mount(<App />);
        wrapper.find('Button').simulate('click')
        wrapper.find('Button').forEach(node => {
            expect(node.simulate('click'));
        });
        
        expect(wrapper.find('Button').last().text()).toBe('Show Results');
        wrapper.unmount();
    });

    // checking the Banner component works after clicking the Show Results button

    test('testcase5', () => {
        wrapper = mount(<App />);
        wrapper.find('Button').simulate('click')
        wrapper.find('Button').forEach(node => {
            expect(node.simulate('click'));
        });
        wrapper.find('Button').last().simulate('click');
        expect(wrapper.find('Button').text()).toBe('Start Quiz');

        wrapper.instance().setState({
            questionsCorrect : 5
        });

        expect(wrapper.find('Banner').text()).toEqual("You have answered 5 / 5  Correctly")

    })
})