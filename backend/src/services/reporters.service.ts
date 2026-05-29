import { findReporters } from "../repositories/reporters.repository";

async function listReporters() {
  return findReporters();
}

export { listReporters };
