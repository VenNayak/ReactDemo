import React from 'react';
import Counter from '../components/Counter';

import {mount,configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ExpansionPanelActions } from '@material-ui/core';
import {create} from 'react-test-renderer';


configure({adapter:new Adapter()});

describe("Counter Tests", () => {

       it("should be created",() => {
             const container = mount(<Counter/>);
             const instance = container.instance();
             
             expect(instance).toBeTruthy();
            

       });

       it("should have state count as 10",() => {
            const container = mount(<Counter/>);       
            const state = container.state();
            expect(state.count).toBe(10);
           

      });

      it("should increment count by 1",() => {
            const container = mount(<Counter/>);
            const instance = container.instance();
            instance.inc();
            const state = container.state();
            expect(state.count).toBe(11);
           

      });

      it("should increment count by 1 on button click",() => {
           // const container = mount(<Counter/>);
            const shallow = mount(<Counter/>); 
            const button = shallow.find("#inc");
            button.simulate("click");
            button.simulate("click");
            button.simulate("click");
            const state = shallow.state();
            expect(state.count).toBe(13);
           

      });

      it("snapshot",() => {
            const container = create(<Counter title = "Testing Counter"/>);
           expect(container.toJSON()).toMatchSnapshot();
      })

})


