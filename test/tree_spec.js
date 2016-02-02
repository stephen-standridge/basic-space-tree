import {expect, assert} from 'chai';
import {List, Map, fromJS, is} from 'immutable';
import SpaceTree from '../dist/bundle';

describe('spaceTree', ()=>{
	var test, control;
	describe('#new Tree', ()=>{
		it('should default to its initial state', ()=>{
			test = new Tree()
			control = fromJS({
					level: 0,
					node: 0,
					maxLevel: 0					
				});
			expect(is(test.state.get('nav'), control)).to.equal(true)
			control = fromJS([])
			expect(is(test.state.get('data'), control)).to.equal(true)
			control = fromJS({
						branches: 2,
						depth: false
					})
			expect(is(test.state.get('config'), control)).to.equal(true)
		})
		it('should allow overriding its defaults', ()=>{
			test = new Tree({
				config:{
					branches: 3,
					depth: 2
				},
				nav: {
					level: 1,
					node: 1, 
					maxLevel: 5
				}})
			control = fromJS({
					level: 1,
					node: 1,
					maxLevel: 5
				});
			expect(is(test.state.get('nav'), control) ).to.equal(true)
			control = fromJS({
						branches: 3,
						depth: 2
					});
			expect(is(test.state.get('config'), control) ).to.equal(true)
		})
		it('should take immutable structures for overrides', ()=>{
			test = new Tree(Map({
				config:Map({
					branches: 3,
					depth: 2
				}),
				nav: Map({
					level: 1,
					node: 1, 
					maxLevel: 5
				})}) )
			control = fromJS({
					level: 1,
					node: 1,
					maxLevel: 5
				});
			expect(is(test.state.get('nav'), control) ).to.equal(true)
			control = fromJS({
						branches: 3,
						depth: 2
					});
			expect(is(test.state.get('config'), control) ).to.equal(true)			
		})
	})
})