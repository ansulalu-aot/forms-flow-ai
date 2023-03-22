import { GROUPS } from "../../constants/groupConstants";

describe("GROUPS", () => {
  test("should contain applicationsAccess and viewSubmissionsAccess properties", () => {
    expect(GROUPS).toHaveProperty("applicationsAccess");
    expect(GROUPS).toHaveProperty("viewSubmissionsAccess");
  });

  test("applicationsAccess should contain the correct access paths", () => {
    const expectedPaths = [
      "/formsflow/formsflow-reviewer/access-allow-applications",
      "/formsflow/formsflow-client/access-allow-applications",
    ];
    expect(GROUPS.applicationsAccess).toEqual(expectedPaths);
  });

  test("viewSubmissionsAccess should contain the correct access paths", () => {
    const expectedPaths = ["/formsflow/formsflow-reviewer/access-allow-submissions"];
    expect(GROUPS.viewSubmissionsAccess).toEqual(expectedPaths);
  });
});
