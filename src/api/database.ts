// database.ts

import { Connection, Request, TYPES } from "tedious";

export const config: any = {
  server: "HAZLEYPC",
  authentication: {
    type: "default",
    options: {
      userName: "Hgallo",
      password: "Readnock123",
    },
  },
  options: {
    port: 1433,
    database: "EduLearn",
    trustServerCertificate: true,
  },
};

export function connectToDatabase(): Connection {
  const connection = new Connection(config);
  connection.connect();
  return connection;
}

export function executeStatement(
  connection: Connection,
  callback: (columns: any[]) => void
): void {
  const request = new Request(
    "SELECT * FROM Users",
    (err: Error | null, rowCount: number) => {
      if (err) {
        throw err;
      } else {
        connection.close();
      }
    }
  );

  request.on("row", (columns) => {
    callback(columns);
  });

  connection.execSql(request);
}
