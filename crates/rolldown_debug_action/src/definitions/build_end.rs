#[derive(valuable::Valuable, ts_rs::TS, serde::Serialize)]
#[ts(export)]
pub struct BuildEnd {
  #[ts(type = "'BuildEnd'")]
  pub kind: &'static str,
}
