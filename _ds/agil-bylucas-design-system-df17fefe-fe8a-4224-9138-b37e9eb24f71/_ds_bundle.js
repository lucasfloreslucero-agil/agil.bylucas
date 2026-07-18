/* @ds-bundle: {"format":4,"namespace":"AgilBylucasDesignSystem_df17fe","components":[{"name":"Callout","sourcePath":"components/content/Callout.jsx"},{"name":"Principle","sourcePath":"components/content/Principle.jsx"},{"name":"SectionHeader","sourcePath":"components/content/SectionHeader.jsx"},{"name":"StepRow","sourcePath":"components/content/StepRow.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Kicker","sourcePath":"components/core/Kicker.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/content/Callout.jsx":"f544fdd24b3c","components/content/Principle.jsx":"659e4b3c7926","components/content/SectionHeader.jsx":"345458a19ca6","components/content/StepRow.jsx":"ca5420623fc9","components/core/Button.jsx":"6fc11106d6a2","components/core/Card.jsx":"f416b46c708e","components/core/Kicker.jsx":"040c4153fd7d","components/core/Tag.jsx":"89ae7019b854"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AgilBylucasDesignSystem_df17fe = window.AgilBylucasDesignSystem_df17fe || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Callout({
  children,
  label,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "agil-callout",
    style: {
      background: "var(--terracotta-wash)",
      borderLeft: "var(--border-accent) solid var(--terracotta)",
      borderRadius: "var(--radius-sm)",
      padding: "16px 20px",
      fontFamily: "var(--font-text)",
      fontSize: "var(--fs-sm)",
      lineHeight: "var(--lh-snug)",
      color: "var(--ink-body)",
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-semibold)",
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      fontSize: 11,
      color: "var(--terracotta-strong)",
      marginRight: 8
    }
  }, label), children);
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Callout.jsx", error: String((e && e.message) || e) }); }

// components/content/Principle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Principle({
  number,
  title,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "agil-principle",
    style: {
      display: "flex",
      gap: 16,
      ...style
    }
  }, rest), number != null && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontSize: 30,
      lineHeight: 1,
      color: "var(--terracotta-soft)",
      flex: "0 0 auto",
      minWidth: 34
    }
  }, number), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--fs-h3)",
      color: "var(--ink-2)",
      margin: "2px 0 6px",
      letterSpacing: "var(--ls-heading)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--fs-sm)",
      lineHeight: "var(--lh-body)",
      color: "var(--ink-body)",
      margin: 0
    }
  }, children)));
}
Object.assign(__ds_scope, { Principle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Principle.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeader({
  kicker,
  title,
  lede,
  onDark = false,
  align = "left",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      textAlign: align,
      maxWidth: align === "center" ? 760 : undefined,
      marginInline: align === "center" ? "auto" : undefined,
      ...style
    }
  }, rest), kicker && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--fs-kicker)",
      letterSpacing: "var(--ls-kicker)",
      textTransform: "uppercase",
      color: onDark ? "var(--paper)" : "var(--terracotta)",
      marginBottom: 14
    }
  }, kicker), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-h1)",
      lineHeight: "var(--lh-heading)",
      letterSpacing: "var(--ls-heading)",
      color: onDark ? "var(--paper)" : "var(--ink-2)",
      margin: 0
    }
  }, title), lede && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--fs-lead)",
      lineHeight: "var(--lh-snug)",
      color: onDark ? "rgba(246,244,239,.8)" : "var(--ink-body)",
      margin: "16px 0 0",
      maxWidth: 620,
      marginInline: align === "center" ? "auto" : undefined
    }
  }, lede));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/content/StepRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StepRow({
  label,
  title,
  children,
  onDark = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "agil-steprow",
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 20,
      background: onDark ? "var(--night-elevated)" : "var(--white)",
      border: onDark ? "1px solid var(--line-on-dark)" : "1px solid var(--line)",
      borderRadius: "var(--radius-md)",
      padding: "14px 22px",
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "0 0 108px",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-medium)",
      fontSize: 13,
      letterSpacing: "0.02em",
      color: "var(--terracotta)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--fs-sm)",
      color: onDark ? "var(--text-on-dark-muted)" : "var(--text-body)",
      lineHeight: "var(--lh-snug)"
    }
  }, title && /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: "var(--fw-semibold)",
      color: onDark ? "var(--cream)" : "var(--text-strong)"
    }
  }, title), title && children ? " — " : null, children));
}
Object.assign(__ds_scope, { StepRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StepRow.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const pad = {
  sm: "8px 16px",
  md: "11px 22px",
  lg: "14px 30px"
};
const fontSize = {
  sm: 13,
  md: 14.5,
  lg: 16
};
function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  disabled = false,
  iconLeft,
  iconRight,
  onClick,
  style,
  ...rest
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontFamily: "var(--font-display)",
    fontWeight: "var(--fw-medium)",
    fontSize: fontSize[size],
    lineHeight: 1,
    letterSpacing: "0.01em",
    padding: pad[size],
    borderRadius: "var(--radius-pill)",
    border: "1px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    textDecoration: "none",
    transition: "background var(--dur) var(--ease-out), color var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out)",
    whiteSpace: "nowrap"
  };
  const variants = {
    primary: {
      background: "var(--terracotta)",
      color: "var(--text-on-accent)"
    },
    dark: {
      background: "var(--ink)",
      color: "var(--paper)"
    },
    outline: {
      background: "transparent",
      color: "var(--ink-2)",
      borderColor: "var(--line-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--terracotta)"
    }
  };
  const cls = "agil-btn agil-btn--" + variant;
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    href: href,
    disabled: href ? undefined : disabled,
    onClick: disabled ? undefined : onClick,
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), iconLeft, /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  padding = 24,
  hover = false,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "agil-card",
    onMouseEnter: hover ? () => setH(true) : undefined,
    onMouseLeave: hover ? () => setH(false) : undefined,
    style: {
      background: "var(--white)",
      border: "1px solid var(--line)",
      borderRadius: "var(--radius-md)",
      padding,
      boxShadow: h ? "var(--shadow-md)" : "var(--shadow-sm)",
      transition: "box-shadow var(--dur) var(--ease-out), transform var(--dur) var(--ease-out)",
      transform: h ? "translateY(-2px)" : "none",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Kicker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Kicker({
  children,
  onDark = false,
  as = "div",
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: "agil-kicker",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--fs-kicker)",
      letterSpacing: "var(--ls-kicker)",
      textTransform: "uppercase",
      color: onDark ? "var(--paper)" : "var(--terracotta)",
      margin: 0,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Kicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Kicker.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  tone = "outline",
  onDark = false,
  style,
  ...rest
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    fontFamily: "var(--font-display)",
    fontWeight: "var(--fw-medium)",
    fontSize: 12,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    padding: "8px 16px",
    borderRadius: "var(--radius-pill)",
    lineHeight: 1,
    whiteSpace: "nowrap"
  };
  const tones = {
    outline: {
      border: onDark ? "1px solid rgba(246,244,239,.4)" : "1px solid var(--line-strong)",
      color: onDark ? "var(--paper)" : "var(--ink-2)",
      background: "transparent"
    },
    solid: {
      background: "var(--terracotta)",
      color: "var(--text-on-accent)",
      border: "1px solid transparent"
    },
    wash: {
      background: "var(--terracotta-wash)",
      color: "var(--terracotta-strong)",
      border: "1px solid transparent"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "agil-tag agil-tag--" + tone,
    style: {
      ...base,
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Principle = __ds_scope.Principle;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.StepRow = __ds_scope.StepRow;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Kicker = __ds_scope.Kicker;

__ds_ns.Tag = __ds_scope.Tag;

})();
