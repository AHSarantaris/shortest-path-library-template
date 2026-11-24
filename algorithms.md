
# Algoritmer til Tower Defence med shortest path

## Shortest path BFS

```pseudo
Algorithm ShortestPathBFS

Input: 
- A graph G.
- A start node s.
- A terminal node t.

Output: 
- If a path from s to t exists: A list of nodes containing a shortest path from s to t,
- If there is no path from s to t: An empty list.

Procedure:
    Let Q be a Queue of length at least equal to the number of nodes in G.
    Add s to Q.
    Mark s as visited.

    While Q is not empty:
        Let n be the front node of Q and remove it from Q.

        if n is the terminal node t:
            Return the list of nodes that the procedure has traversed to reach n.
        End If

        Add the unvisited neighbors of n to Q, mark them as visited and mark n as the node they came from.
    End While

    Return an empty list.
End procedure
```

## Shortest path Dijkstra

```pseudo
Algorithm ShortestPathDijkstra

Input: 
- A graph G with non-negative edge weights.
- A weight function w which, given an edge (n,m) returns the weight of the edge.
- A start node s.
- A terminal node t.

Output: 
- If a path from s to t exists: A list of nodes containing a shortest path from s to t,
- If there is no path from s to t: An empty list.

Procedure:
    Let distMap and prevMap be empty maps.
    Let visitedSet be an empty set.
    Let PQ be an empty priority queue of length at least equal to the number of edges in G.

    Insert s into PQ with priority 0.
    Set distMap(s) = 0.

    While PQ is not empty:
        Let n be the node in PQ with the smallest priority, and remove it from PQ.

        if n is visited:
            Continue to next iteration.
        End If
        
        Add n to visitedSet.

        If n is the terminal node t:
            Reconstruct the path from s to t by following prevMap backwards from t,
            reverse it, and return it.
        End If

        For each neighbor m of n:
            If m is in visitedSet:
                Continue to next iteration.
            End IF
            
            Let newDist = distMap(n) + w(n, m).
            
            If m is not in distMap or newDist < distMap(m):
                Set distMap(m) = newDist.
                Set prevMap(m) = n.
                Insert m into PQ with priority newDist.
            End If
        End For
    End While

    Return an empty list.
End procedure
```
