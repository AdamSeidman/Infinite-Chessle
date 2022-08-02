package pgn;

import java.io.File;
import java.io.FileWriter;
import java.util.Scanner;

public class Intake {
    private static final String PGN_PATH = "pgn-parser\\pgn-files\\millionbase-2.5.pgn";
    private static final String OUT_PATH = "pgn-parser\\pgn-files\\out\\millionbase-revA.txt";
    public static void main(String[] args) {
        try {
            Scanner infile = new Scanner(new File(PGN_PATH));
            FileWriter writer = new FileWriter(new File(OUT_PATH), false);
            boolean foundFEN = false;
            while (infile.hasNext()) {
                String line = infile.nextLine();
                if (line.startsWith("[FEN")) {
                    foundFEN = true;
                } else if (line.startsWith("1. ") && line.contains("6.")) {
                    if (foundFEN) {
                        foundFEN = false;
                    } else {
                        line = line.substring(0, line.indexOf("6.") - 1);
                        while (line.contains(".")) {
                            line = line.substring(0, line.indexOf(".") - 1) + line.substring(line.indexOf(".") + 1);
                        }
                        line = line.trim().replaceAll("  ", " ");
                        writer.write(line);
                        writer.write(System.lineSeparator());
                    }
                }
            }
            infile.close();
            writer.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}