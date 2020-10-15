class Graph{
    constructor(){
        this.NumberOfNodes=0;
        this.AdjacentList={};
    }
    AddVertex(node){
        this.AdjacentList[node]=[];
        this.NumberOfNodes++;
        //console.log(this.AdjacentList);
        return this;
    }
    AddEdge(node1,node2){
        // check parameters
        this.AdjacentList[node1].push([node2])
        this.AdjacentList[node2].push([node1])
        //console.log(this.AdjacentList)
        return this;

    }
    ShowConnections(){
        const AllNodes=Object.keys(this.AdjacentList);
        for(let node of AllNodes){
            let NodeConnection=this.AdjacentList[node]
            let connections=" ";
            for(let vertex of NodeConnection){
                connections+= vertex + " " ;
            }
            console.log(node + "----> " + connections);
        }
    }
}
const MyGraph=new Graph();
MyGraph.AddVertex('0');
MyGraph.AddVertex('1');
MyGraph.AddVertex('2');
MyGraph.AddVertex('3');
MyGraph.AddVertex('4');
MyGraph.AddVertex('5');
MyGraph.AddVertex('6')
MyGraph.AddEdge('0','2');
MyGraph.AddEdge('1','2');
MyGraph.AddEdge('3','1');
MyGraph.AddEdge('3','4');
MyGraph.AddEdge('1','0');
MyGraph.AddEdge('6','5');
MyGraph.AddEdge('4','2');
MyGraph.AddEdge('4','5');


console.log(MyGraph);
MyGraph.ShowConnections();