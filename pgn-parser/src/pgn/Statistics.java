package pgn;

import java.io.File;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;

public class Statistics {
    private static final String IN_PATH = "pgn-parser\\pgn-files\\out\\millionbase-revA.txt";
    private static final String OUT_PATH = "pgn-parser\\pgn-files\\out\\millionbase-revB.txt";

    public static void main(String[] args) {
        try {
            
            int i = 0;

            ArrayList<String> keySet = new ArrayList<>();
            HashMap<String, Integer> pgnMap = new HashMap<>();
            Scanner infile = new Scanner(new File(IN_PATH));
            while (infile.hasNext()) {
                if (i % 1000 == 0) {
                    System.out.println(i);
                }
                i++; // TODO remove
                String line = infile.nextLine();
                if (line == null || line.length() <= 2) {
                    break;
                }
                if (keySet.contains(line)) {
                    pgnMap.put(line, pgnMap.get(line) + 1);
                } else {
                    keySet.add(line);
                    pgnMap.put(line, 1);
                }
            }
            infile.close();

            i = 0;

            FileWriter writer = new FileWriter(new File(OUT_PATH), false);
            for (String pgn : keySet) {
                if (i % 1000 == 0) {
                    System.out.println(i);
                }
                i++; // TODO remove
                writer.write(Integer.toString(pgnMap.get(pgn)) + ": " + pgn);
                writer.write(System.lineSeparator());
            }
            writer.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
