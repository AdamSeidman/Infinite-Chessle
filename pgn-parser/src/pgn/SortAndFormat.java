package pgn;

import java.io.File;
import java.io.FileWriter;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

public class SortAndFormat {
    private static final String IN_PATH = "pgn-parser\\pgn-files\\out\\millionbase-revB.txt";
    private static final String OUT_PATH = "pgn-parser\\pgn-files\\out\\millionbase-revC.txt";

    public static void main(String[] args) {
        try {
            Scanner infile = new Scanner(new File(IN_PATH));
            HashMap<String, Integer> pgnMap = new HashMap<>();
            while (infile.hasNext()) {
                String line = infile.nextLine();
                if (line != null && line.length() > 2) {
                    int times = Integer.parseInt(line.substring(0, line.indexOf(":")));
                    String pgn = "\"" + line.substring(line.indexOf(":") + 2) + "\",";
                    pgnMap.put(pgn, times);
                }
            }
            infile.close();

            pgnMap = sortByValue(pgnMap);

            FileWriter writer = new FileWriter(new File(OUT_PATH), false);
            for (String pgn : pgnMap.keySet()) {
                writer.write(pgn);
                writer.write(System.lineSeparator());
            }
            writer.close();
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static HashMap<String, Integer> sortByValue(HashMap<String, Integer> hm)
    {
        // Create a list from elements of HashMap
        List<Map.Entry<String, Integer> > list =
               new LinkedList<Map.Entry<String, Integer> >(hm.entrySet());
 
        // Sort the list
        Collections.sort(list, new Comparator<Map.Entry<String, Integer> >() {
            public int compare(Map.Entry<String, Integer> o1,
                               Map.Entry<String, Integer> o2)
            {
                return (o2.getValue()).compareTo(o1.getValue());
            }
        });
         
        // put data from sorted list to hashmap
        HashMap<String, Integer> temp = new LinkedHashMap<String, Integer>();
        for (Map.Entry<String, Integer> aa : list) {
            temp.put(aa.getKey(), aa.getValue());
        }
        return temp;
    }
}
