import { Q as push, a4 as getContext, $ as spread_attributes, a0 as attr, T as escape_html, S as pop, a5 as sanitize_slots, Y as sanitize_props, Z as rest_props, _ as fallback, X as slot, a1 as bind_props, a6 as element, a2 as spread_props, a7 as stringify, a8 as copy_payload, a9 as assign_payload, R as setContext, V as store_get, W as unsubscribe_stores } from "./index.js";
import { twMerge, twJoin } from "tailwind-merge";
import { F as Frame, W as Wrapper, T as ToolbarButton, B as Button, I as Input } from "./Input.js";
import * as dom from "@floating-ui/dom";
import { w as writable } from "./index2.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function SearchOutline($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let {
    size = ctx.size || "md",
    color = ctx.color || "currentColor",
    title,
    strokeWidth = ctx.strokeWidth || "2",
    desc,
    class: className,
    ariaLabel = "search outline",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      color,
      ...restProps,
      class: twMerge("shrink-0", sizes[size], className),
      "aria-label": ariaLabel,
      "aria-describedby": hasDescription ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round"${attr("stroke-width", strokeWidth)} d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"></path></svg>`;
  pop();
}
function Indicator($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "color",
    "rounded",
    "size",
    "border",
    "placement",
    "offset"
  ]);
  push();
  let color = fallback($$props["color"], "gray");
  let rounded = fallback($$props["rounded"], false);
  let size = fallback($$props["size"], "md");
  let border = fallback($$props["border"], false);
  let placement = fallback($$props["placement"], () => void 0, true);
  let offset = fallback($$props["offset"], true);
  const colors = {
    gray: "bg-gray-200",
    dark: "bg-gray-900 dark:bg-gray-700",
    blue: "bg-blue-600",
    orange: "bg-orange-600",
    green: "bg-green-500",
    red: "bg-red-500",
    purple: "bg-purple-500",
    indigo: "bg-indigo-500",
    yellow: "bg-yellow-300",
    teal: "bg-teal-500",
    none: ""
  };
  const sizes = {
    xs: "w-2 h-2",
    sm: "w-2.5 h-2.5",
    md: "w-3 h-3",
    lg: "w-3.5 h-3.5",
    xl: "w-6 h-6"
  };
  const placements = {
    // top
    "top-left": "top-0 start-0",
    "top-center": "top-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 rtl:translate-x-1/2",
    "top-right": "top-0 end-0",
    // center
    "center-left": "top-1/2 -translate-y-1/2 start-0",
    center: "top-1/2 -translate-y-1/2 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 rtl:translate-x-1/2",
    "center-right": "top-1/2 -translate-y-1/2 end-0",
    // bottom
    "bottom-left": "bottom-0 start-0",
    "bottom-center": "bottom-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 rtl:translate-x-1/2",
    "bottom-right": "bottom-0 end-0"
  };
  const offsets = {
    // top
    "top-left": "-translate-x-1/3 rtl:translate-x-1/3 -translate-y-1/3",
    "top-center": "-translate-y-1/3",
    "top-right": "translate-x-1/3 rtl:-translate-x-1/3 -translate-y-1/3",
    // center
    "center-left": "-translate-x-1/3 rtl:translate-x-1/3",
    center: "",
    "center-right": "translate-x-1/3 rtl:-translate-x-1/3",
    // bottom
    "bottom-left": "-translate-x-1/3 rtl:translate-x-1/3 translate-y-1/3",
    "bottom-center": "translate-y-1/3",
    "bottom-right": "translate-x-1/3 rtl:-translate-x-1/3 translate-y-1/3"
  };
  let dotClass;
  dotClass = twMerge("flex-shrink-0", rounded ? "rounded" : "rounded-full", border && "border-2 border-white dark:border-gray-800", sizes[size], colors[color], $$slots.default && "inline-flex items-center justify-center", placement && "absolute " + placements[placement], placement && offset && offsets[placement], $$sanitized_props.class);
  $$payload.out += `<div${spread_attributes({ ...$$restProps, class: dotClass })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div>`;
  bind_props($$props, {
    color,
    rounded,
    size,
    border,
    placement,
    offset
  });
  pop();
}
function Avatar($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "src",
    "href",
    "rounded",
    "border",
    "stacked",
    "dot",
    "alt",
    "size"
  ]);
  push();
  let src = fallback($$props["src"], "");
  let href = fallback($$props["href"], () => void 0, true);
  let rounded = fallback($$props["rounded"], false);
  let border = fallback($$props["border"], false);
  let stacked = fallback($$props["stacked"], false);
  let dot = fallback($$props["dot"], () => void 0, true);
  let alt = fallback($$props["alt"], "");
  let size = fallback($$props["size"], "md");
  const sizes = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-20 h-20",
    xl: "w-36 h-36",
    none: ""
  };
  let avatarClass;
  dot = dot && {
    placement: "top-right",
    color: "gray",
    size: "lg",
    ...dot
  };
  avatarClass = twMerge(rounded ? "rounded" : "rounded-full", border && "p-1 ring-2 ring-gray-300 dark:ring-gray-500", sizes[size], stacked && "border-2 -ms-4 border-white dark:border-gray-800", "bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 object-cover", $$sanitized_props.class);
  if (!src || !!href || $$slots.default || dot) {
    $$payload.out += "<!--[-->";
    const $$tag = href ? "a" : "div";
    element(
      $$payload,
      $$tag,
      () => {
        $$payload.out += `${spread_attributes({
          href,
          ...$$restProps,
          class: `relative flex justify-center items-center ${stringify(avatarClass)}`
        })}`;
      },
      () => {
        if (src) {
          $$payload.out += "<!--[-->";
          $$payload.out += `<img${attr("alt", alt)}${attr("src", src)}${attr("class", rounded ? "rounded" : "rounded-full")}>`;
        } else {
          $$payload.out += "<!--[!-->";
          $$payload.out += `<!---->`;
          slot($$payload, $$props, "default", {}, () => {
            $$payload.out += `<svg${attr("class", `w-full h-full ${stringify(rounded ? "rounded" : "rounded-full")}`)} fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>`;
          });
          $$payload.out += `<!---->`;
        }
        $$payload.out += `<!--]--> `;
        if (dot) {
          $$payload.out += "<!--[-->";
          Indicator($$payload, spread_props([{ border: true, offset: rounded }, dot]));
        } else {
          $$payload.out += "<!--[!-->";
        }
        $$payload.out += `<!--]-->`;
      }
    );
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<img${spread_attributes({
      alt,
      src,
      ...$$restProps,
      class: avatarClass
    })} onload="this.__e=event" onerror="this.__e=event">`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    src,
    href,
    rounded,
    border,
    stacked,
    dot,
    alt,
    size
  });
  pop();
}
function Popper($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "activeContent",
    "arrow",
    "offset",
    "placement",
    "trigger",
    "triggeredBy",
    "reference",
    "strategy",
    "open",
    "yOnly",
    "middlewares"
  ]);
  push();
  let middleware;
  let activeContent = fallback($$props["activeContent"], false);
  let arrow = fallback($$props["arrow"], true);
  let offset = fallback($$props["offset"], 8);
  let placement = fallback($$props["placement"], "top");
  let trigger = fallback($$props["trigger"], "hover");
  let triggeredBy = fallback($$props["triggeredBy"], () => void 0, true);
  let reference = fallback($$props["reference"], () => void 0, true);
  let strategy = fallback($$props["strategy"], "absolute");
  let open = fallback($$props["open"], false);
  let yOnly = fallback($$props["yOnly"], false);
  let middlewares = fallback($$props["middlewares"], () => [dom.flip(), dom.shift()], true);
  let referenceEl;
  let floatingEl;
  let arrowEl;
  const px = (n) => n ? `${n}px` : "";
  let arrowSide;
  const oppositeSideMap = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function updatePosition() {
    dom.computePosition(referenceEl, floatingEl, { placement, strategy, middleware }).then(({
      x,
      y,
      middlewareData,
      placement: placement2,
      strategy: strategy2
    }) => {
      floatingEl.style.position = strategy2;
      floatingEl.style.left = yOnly ? "0" : px(x);
      floatingEl.style.top = px(y);
      if (middlewareData.arrow && arrowEl instanceof HTMLDivElement) {
        arrowEl.style.left = px(middlewareData.arrow.x);
        arrowEl.style.top = px(middlewareData.arrow.y);
        arrowSide = oppositeSideMap[placement2.split("-")[0]];
        arrowEl.style[arrowSide] = px(-arrowEl.offsetWidth / 2 - ($$sanitized_props.border ? 1 : 0));
      }
    });
  }
  function init(node, _referenceEl) {
    floatingEl = node;
    let cleanup = dom.autoUpdate(_referenceEl, floatingEl, updatePosition);
    return {
      update(_referenceEl2) {
        cleanup();
        cleanup = dom.autoUpdate(_referenceEl2, floatingEl, updatePosition);
      },
      destroy() {
        cleanup();
      }
    };
  }
  let arrowClass;
  placement && (referenceEl = referenceEl);
  middleware = [
    ...middlewares,
    dom.offset(+offset),
    arrowEl
  ];
  arrowClass = twJoin("absolute pointer-events-none block w-[10px] h-[10px] rotate-45 bg-inherit border-inherit", $$sanitized_props.border && arrowSide === "bottom" && "border-b border-e", $$sanitized_props.border && arrowSide === "top" && "border-t border-s ", $$sanitized_props.border && arrowSide === "right" && "border-t border-e ", $$sanitized_props.border && arrowSide === "left" && "border-b border-s ");
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    if (!referenceEl) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<div></div>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (referenceEl) {
      $$payload2.out += "<!--[-->";
      Frame($$payload2, spread_props([
        {
          use: init,
          options: referenceEl,
          get open() {
            return open;
          },
          set open($$value) {
            open = $$value;
            $$settled = false;
          },
          role: "tooltip",
          tabindex: activeContent ? -1 : void 0
        },
        $$restProps,
        {
          children: ($$payload3) => {
            $$payload3.out += `<!---->`;
            slot($$payload3, $$props, "default", {}, null);
            $$payload3.out += `<!----> `;
            if (arrow) {
              $$payload3.out += "<!--[-->";
              $$payload3.out += `<div${attr("class", arrowClass)}></div>`;
            } else {
              $$payload3.out += "<!--[!-->";
            }
            $$payload3.out += `<!--]-->`;
          },
          $$slots: { default: true }
        }
      ]));
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]-->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, {
    activeContent,
    arrow,
    offset,
    placement,
    trigger,
    triggeredBy,
    reference,
    strategy,
    open,
    yOnly,
    middlewares
  });
  pop();
}
function Dropdown($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "activeUrl",
    "open",
    "containerClass",
    "classContainer",
    "headerClass",
    "classHeader",
    "footerClass",
    "classFooter",
    "activeClass",
    "classActive",
    "arrow",
    "trigger",
    "placement",
    "color",
    "shadow",
    "rounded"
  ]);
  push();
  let containerCls, headerCls, ulCls, footerCls;
  let activeUrl = fallback($$props["activeUrl"], () => void 0, true);
  let open = fallback($$props["open"], false);
  let containerClass = fallback($$props["containerClass"], "divide-y z-50");
  let classContainer = fallback($$props["classContainer"], () => void 0, true);
  let headerClass = fallback($$props["headerClass"], "py-1 overflow-hidden rounded-t-lg");
  let classHeader = fallback($$props["classHeader"], () => void 0, true);
  let footerClass = fallback($$props["footerClass"], "py-1 overflow-hidden rounded-b-lg");
  let classFooter = fallback($$props["classFooter"], () => void 0, true);
  let activeClass = fallback($$props["activeClass"], "text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900");
  let classActive = fallback($$props["classActive"], () => void 0, true);
  let arrow = fallback($$props["arrow"], false);
  let trigger = fallback($$props["trigger"], "click");
  let placement = fallback($$props["placement"], "bottom");
  let color = fallback($$props["color"], "dropdown");
  let shadow = fallback($$props["shadow"], true);
  let rounded = fallback($$props["rounded"], true);
  const activeUrlStore = writable("");
  let activeCls = twMerge(activeClass, classActive);
  setContext("DropdownType", { activeClass: activeCls });
  setContext("activeUrl", activeUrlStore);
  activeUrlStore.set(activeUrl ?? "");
  containerCls = twMerge(containerClass, classContainer);
  headerCls = twMerge(headerClass, classHeader);
  ulCls = twMerge("py-1", $$sanitized_props.class);
  footerCls = twMerge(footerClass, classFooter);
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    Popper($$payload2, spread_props([
      { activeContent: true },
      $$restProps,
      {
        trigger,
        arrow,
        placement,
        shadow,
        rounded,
        color,
        class: containerCls,
        get open() {
          return open;
        },
        set open($$value) {
          open = $$value;
          $$settled = false;
        },
        children: ($$payload3) => {
          if ($$slots.header) {
            $$payload3.out += "<!--[-->";
            $$payload3.out += `<div${attr("class", headerCls)}><!---->`;
            slot($$payload3, $$props, "header", {}, null);
            $$payload3.out += `<!----></div>`;
          } else {
            $$payload3.out += "<!--[!-->";
          }
          $$payload3.out += `<!--]--> <ul${attr("class", ulCls)}><!---->`;
          slot($$payload3, $$props, "default", {}, null);
          $$payload3.out += `<!----></ul> `;
          if ($$slots.footer) {
            $$payload3.out += "<!--[-->";
            $$payload3.out += `<div${attr("class", footerCls)}><!---->`;
            slot($$payload3, $$props, "footer", {}, null);
            $$payload3.out += `<!----></div>`;
          } else {
            $$payload3.out += "<!--[!-->";
          }
          $$payload3.out += `<!--]-->`;
        },
        $$slots: { default: true }
      }
    ]));
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, {
    activeUrl,
    open,
    containerClass,
    classContainer,
    headerClass,
    classHeader,
    footerClass,
    classFooter,
    activeClass,
    classActive,
    arrow,
    trigger,
    placement,
    color,
    shadow,
    rounded
  });
  pop();
}
function DropdownItem($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["defaultClass", "href", "activeClass"]);
  push();
  let active, liClass;
  let defaultClass = fallback($$props["defaultClass"], "font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600");
  let href = fallback($$props["href"], () => void 0, true);
  let activeClass = fallback($$props["activeClass"], () => void 0, true);
  const context = getContext("DropdownType") ?? {};
  const activeUrlStore = getContext("activeUrl");
  let sidebarUrl = "";
  activeUrlStore.subscribe((value) => {
    sidebarUrl = value;
  });
  let wrap = true;
  function init(node) {
    wrap = node.parentElement?.tagName === "UL";
  }
  active = sidebarUrl ? href === sidebarUrl : false;
  liClass = twMerge(defaultClass, href ? "block" : "w-full text-left", active && (activeClass ?? context.activeClass), $$sanitized_props.class);
  Wrapper($$payload, {
    tag: "li",
    show: wrap,
    use: init,
    children: ($$payload2) => {
      const $$tag = href ? "a" : "button";
      element(
        $$payload2,
        $$tag,
        () => {
          $$payload2.out += `${spread_attributes({
            href,
            type: href ? void 0 : "button",
            role: href ? "link" : "button",
            ...$$restProps,
            class: liClass
          })}`;
        },
        () => {
          $$payload2.out += `<!---->`;
          slot($$payload2, $$props, "default", {}, null);
          $$payload2.out += `<!---->`;
        }
      );
    },
    $$slots: { default: true }
  });
  bind_props($$props, { defaultClass, href, activeClass });
  pop();
}
function NavContainer($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["fluid"]);
  push();
  let fluid = fallback($$props["fluid"], false);
  $$payload.out += `<div${spread_attributes({
    ...$$restProps,
    class: twMerge("mx-auto flex flex-wrap justify-between items-center ", fluid ? "w-full" : "container", $$sanitized_props.class)
  })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { fluid });
  pop();
}
function Navbar($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["fluid", "navContainerClass"]);
  push();
  var $$store_subs;
  let fluid = fallback($$props["fluid"], false);
  let navContainerClass = fallback($$props["navContainerClass"], "");
  let hidden = writable(true);
  setContext("navHidden", hidden);
  let toggle = () => hidden.update((hidden2) => !hidden2);
  {
    $$restProps.color = $$restProps.color ?? "navbar";
  }
  Frame($$payload, spread_props([
    { tag: "nav" },
    $$restProps,
    {
      class: twMerge("px-2 sm:px-4 py-2.5 w-full", $$sanitized_props.class),
      children: ($$payload2) => {
        NavContainer($$payload2, {
          fluid,
          class: navContainerClass,
          children: ($$payload3) => {
            $$payload3.out += `<!---->`;
            slot(
              $$payload3,
              $$props,
              "default",
              {
                hidden: store_get($$store_subs ??= {}, "$hidden", hidden),
                toggle,
                NavContainer
              },
              null
            );
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    }
  ]));
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { fluid, navContainerClass });
  pop();
}
function NavBrand($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["href"]);
  push();
  let href = fallback($$props["href"], "");
  $$payload.out += `<a${spread_attributes({
    href,
    ...$$restProps,
    class: twMerge("flex items-center", $$sanitized_props.class)
  })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></a>`;
  bind_props($$props, { href });
  pop();
}
function Menu($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["size", "color", "variation", "ariaLabel"]);
  push();
  let size = fallback($$props["size"], "24");
  let color = fallback($$props["color"], "currentColor");
  let variation = fallback($$props["variation"], "outline");
  let ariaLabel = fallback($$props["ariaLabel"], "bars 3");
  let viewBox;
  let svgpath;
  let svgoutline = `<path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path> `;
  let svgsolid = `<path fill="${color}" clip-rule="evenodd" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path> `;
  switch (variation) {
    case "outline":
      svgpath = svgoutline;
      viewBox = "0 0 24 24";
      break;
    case "solid":
      svgpath = svgsolid;
      viewBox = "0 0 24 24";
      break;
    default:
      svgpath = svgoutline;
      viewBox = "0 0 24 24";
  }
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      role: "button",
      tabindex: "0",
      width: size,
      height: size,
      class: $$sanitized_props.class,
      ...$$restProps,
      "aria-label": ariaLabel,
      fill: "none",
      viewBox,
      "stroke-width": "2"
    },
    void 0,
    void 0,
    3
  )}>${html(svgpath)}</svg>`;
  bind_props($$props, { size, color, variation, ariaLabel });
  pop();
}
function NavHamburger($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["menuClass", "onClick", "classMenu"]);
  push();
  let menuClass = fallback($$props["menuClass"], "h-6 w-6 shrink-0");
  let onClick = fallback($$props["onClick"], () => void 0, true);
  let classMenu = fallback($$props["classMenu"], "");
  let btnClass = "ms-3 md:hidden";
  getContext("navHidden") ?? writable(true);
  ToolbarButton($$payload, spread_props([
    { name: "Open main menu" },
    $$restProps,
    {
      class: twMerge(btnClass, $$sanitized_props.class),
      children: ($$payload2) => {
        Menu($$payload2, { class: twMerge(menuClass, classMenu) });
      },
      $$slots: { default: true }
    }
  ]));
  bind_props($$props, { menuClass, onClick, classMenu });
  pop();
}
function Navbar_1($$payload) {
  Navbar($$payload, {
    class: "fixed w-full z-20 bg-opacity-30 bg-black backdrop-blur-lg shadow-lg",
    children: ($$payload2) => {
      NavBrand($$payload2, {
        href: "/",
        class: "flex items-center flex-shrink-0",
        children: ($$payload3) => {
          $$payload3.out += `<img src="/cflogo.png" class="mr-3 h-8 sm:h-10" alt="CF Logo"> <span class="self-center whitespace-nowrap text-2xl font-bold text-white">OmniForge</span>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <ul class="flex-1 flex justify-center space-x-8 items-center mx-4 hidden md:flex"><li><a href="/app">Dashboard</a></li> <li><a href="/app/orgs/">Orgs</a></li> <li><a href="/docs">Docs</a></li></ul> <div class="flex items-center gap-2 flex-shrink-0">`;
      Button($$payload2, {
        color: "none",
        "data-collapse-toggle": "mobile-menu-3",
        "aria-controls": "mobile-menu-3",
        "aria-expanded": "false",
        class: "md:hidden text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-700 rounded-lg text-sm p-2.5",
        children: ($$payload3) => {
          SearchOutline($$payload3, { class: "w-5 h-5" });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <div class="hidden relative md:block w-64"><div class="flex absolute inset-y-0 start-0 items-center ps-3 pointer-events-none">`;
      SearchOutline($$payload2, { class: "w-4 h-4" });
      $$payload2.out += `<!----></div> `;
      Input($$payload2, {
        id: "search-navbar",
        class: "ps-10 bg-gray-800 text-gray-200 border-gray-600",
        placeholder: "Search..."
      });
      $$payload2.out += `<!----></div> `;
      Dropdown($$payload2, {
        triggeredBy: "#avatar",
        class: "bg-black text-gray-200 shadow-lg",
        children: ($$payload3) => {
          DropdownItem($$payload3, {
            href: "/profile",
            class: "hover:bg-gray-800 transition-colors duration-150",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Profile`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownItem($$payload3, {
            href: "/settings",
            class: "hover:bg-gray-800 transition-colors duration-150",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Settings`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownItem($$payload3, { divider: true });
          $$payload3.out += `<!----> `;
          DropdownItem($$payload3, {
            class: "hover:bg-red-700 transition-colors duration-150",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Sign out`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: {
          default: true,
          trigger: ($$payload3) => {
            $$payload3.out += `<div slot="trigger">`;
            Avatar($$payload3, {
              id: "avatar",
              class: "cursor-pointer ring-2 ring-gray-600 hover:ring-gray-400 transition-all",
              src: user.avatar || "",
              alt: user.name
            });
            $$payload3.out += `<!----></div>`;
          }
        }
      });
      $$payload2.out += `<!----> `;
      NavHamburger($$payload2, {
        class: "md:hidden text-white hover:text-gray-300"
      });
      $$payload2.out += `<!----></div>`;
    },
    $$slots: { default: true }
  });
}
export {
  Navbar_1 as N
};
