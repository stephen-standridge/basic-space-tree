import Tree from 'basic-tree'

class SpaceTree extends Tree{
	initialState(){
		return super().mergeDeep(Map({
			config: Map({
				
			})
		}))
	}
}