(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    7983: function (e, t, o) {
      "use strict";
      var r, n;
      e.exports =
        (null == (r = o.g.process) ? void 0 : r.env) &&
        "object" == typeof (null == (n = o.g.process) ? void 0 : n.env)
          ? o.g.process
          : o(6226);
    },
    4596: function (e, t, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return o(1158);
        },
      ]);
    },
    1158: function (e, t, o) {
      "use strict";
      o.r(t),
        o.d(t, {
          default: function () {
            return v;
          },
        });
      var r = o(1527),
        n = o(959),
        a = o(3850),
        i = o.n(a);
      function p() {
        return (p = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var r in o)
                  Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      function l(e, t) {
        if (null == e) return {};
        var o,
          r,
          n = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++)
          (o = a[r]), t.indexOf(o) >= 0 || (n[o] = e[o]);
        return n;
      }
      var c = ["keyOverride"],
        h = ["crossOrigin"],
        s = {
          templateTitle: "",
          noindex: !1,
          nofollow: !1,
          norobots: !1,
          defaultOpenGraphImageWidth: 0,
          defaultOpenGraphImageHeight: 0,
          defaultOpenGraphVideoWidth: 0,
          defaultOpenGraphVideoHeight: 0,
        },
        u = function (e, t, o) {
          void 0 === t && (t = []);
          var r = void 0 === o ? {} : o,
            a = r.defaultWidth,
            i = r.defaultHeight;
          return t.reduce(function (t, o, r) {
            return (
              t.push(
                n.createElement("meta", {
                  key: "og:" + e + ":0" + r,
                  property: "og:" + e,
                  content: o.url,
                })
              ),
              o.alt &&
                t.push(
                  n.createElement("meta", {
                    key: "og:" + e + ":alt0" + r,
                    property: "og:" + e + ":alt",
                    content: o.alt,
                  })
                ),
              o.secureUrl &&
                t.push(
                  n.createElement("meta", {
                    key: "og:" + e + ":secure_url0" + r,
                    property: "og:" + e + ":secure_url",
                    content: o.secureUrl.toString(),
                  })
                ),
              o.type &&
                t.push(
                  n.createElement("meta", {
                    key: "og:" + e + ":type0" + r,
                    property: "og:" + e + ":type",
                    content: o.type.toString(),
                  })
                ),
              o.width
                ? t.push(
                    n.createElement("meta", {
                      key: "og:" + e + ":width0" + r,
                      property: "og:" + e + ":width",
                      content: o.width.toString(),
                    })
                  )
                : a &&
                  t.push(
                    n.createElement("meta", {
                      key: "og:" + e + ":width0" + r,
                      property: "og:" + e + ":width",
                      content: a.toString(),
                    })
                  ),
              o.height
                ? t.push(
                    n.createElement("meta", {
                      key: "og:" + e + ":height" + r,
                      property: "og:" + e + ":height",
                      content: o.height.toString(),
                    })
                  )
                : i &&
                  t.push(
                    n.createElement("meta", {
                      key: "og:" + e + ":height" + r,
                      property: "og:" + e + ":height",
                      content: i.toString(),
                    })
                  ),
              t
            );
          }, []);
        },
        d = function (e) {
          var t,
            o,
            r,
            a,
            i,
            d = [];
          e.titleTemplate && (s.templateTitle = e.titleTemplate);
          var m = "";
          e.title
            ? ((m = e.title),
              s.templateTitle &&
                (m = s.templateTitle.replace(/%s/g, function () {
                  return m;
                })))
            : e.defaultTitle && (m = e.defaultTitle),
            m && d.push(n.createElement("title", { key: "title" }, m));
          var f =
              void 0 === e.noindex
                ? s.noindex || e.dangerouslySetAllPagesToNoIndex
                : e.noindex,
            g =
              void 0 === e.nofollow
                ? s.nofollow || e.dangerouslySetAllPagesToNoFollow
                : e.nofollow,
            y = e.norobots || s.norobots,
            v = "";
          if (e.robotsProps) {
            var G = e.robotsProps,
              k = G.nosnippet,
              b = G.maxSnippet,
              E = G.maxImagePreview,
              T = G.maxVideoPreview,
              w = G.noarchive,
              O = G.noimageindex,
              x = G.notranslate,
              _ = G.unavailableAfter;
            v =
              (k ? ",nosnippet" : "") +
              (b ? ",max-snippet:" + b : "") +
              (E ? ",max-image-preview:" + E : "") +
              (w ? ",noarchive" : "") +
              (_ ? ",unavailable_after:" + _ : "") +
              (O ? ",noimageindex" : "") +
              (T ? ",max-video-preview:" + T : "") +
              (x ? ",notranslate" : "");
          }
          if (
            (e.norobots && (s.norobots = !0),
            f || g
              ? (e.dangerouslySetAllPagesToNoIndex && (s.noindex = !0),
                e.dangerouslySetAllPagesToNoFollow && (s.nofollow = !0),
                d.push(
                  n.createElement("meta", {
                    key: "robots",
                    name: "robots",
                    content:
                      (f ? "noindex" : "index") +
                      "," +
                      (g ? "nofollow" : "follow") +
                      v,
                  })
                ))
              : (!y || v) &&
                d.push(
                  n.createElement("meta", {
                    key: "robots",
                    name: "robots",
                    content: "index,follow" + v,
                  })
                ),
            e.description &&
              d.push(
                n.createElement("meta", {
                  key: "description",
                  name: "description",
                  content: e.description,
                })
              ),
            e.themeColor &&
              d.push(
                n.createElement("meta", {
                  key: "theme-color",
                  name: "theme-color",
                  content: e.themeColor,
                })
              ),
            e.mobileAlternate &&
              d.push(
                n.createElement("link", {
                  rel: "alternate",
                  key: "mobileAlternate",
                  media: e.mobileAlternate.media,
                  href: e.mobileAlternate.href,
                })
              ),
            e.languageAlternates &&
              e.languageAlternates.length > 0 &&
              e.languageAlternates.forEach(function (e) {
                d.push(
                  n.createElement("link", {
                    rel: "alternate",
                    key: "languageAlternate-" + e.hrefLang,
                    hrefLang: e.hrefLang,
                    href: e.href,
                  })
                );
              }),
            e.twitter &&
              (e.twitter.cardType &&
                d.push(
                  n.createElement("meta", {
                    key: "twitter:card",
                    name: "twitter:card",
                    content: e.twitter.cardType,
                  })
                ),
              e.twitter.site &&
                d.push(
                  n.createElement("meta", {
                    key: "twitter:site",
                    name: "twitter:site",
                    content: e.twitter.site,
                  })
                ),
              e.twitter.handle &&
                d.push(
                  n.createElement("meta", {
                    key: "twitter:creator",
                    name: "twitter:creator",
                    content: e.twitter.handle,
                  })
                )),
            e.facebook &&
              e.facebook.appId &&
              d.push(
                n.createElement("meta", {
                  key: "fb:app_id",
                  property: "fb:app_id",
                  content: e.facebook.appId,
                })
              ),
            ((null != (t = e.openGraph) && t.title) || m) &&
              d.push(
                n.createElement("meta", {
                  key: "og:title",
                  property: "og:title",
                  content: (null == (a = e.openGraph) ? void 0 : a.title) || m,
                })
              ),
            ((null != (o = e.openGraph) && o.description) || e.description) &&
              d.push(
                n.createElement("meta", {
                  key: "og:description",
                  property: "og:description",
                  content:
                    (null == (i = e.openGraph) ? void 0 : i.description) ||
                    e.description,
                })
              ),
            e.openGraph)
          ) {
            if (
              ((e.openGraph.url || e.canonical) &&
                d.push(
                  n.createElement("meta", {
                    key: "og:url",
                    property: "og:url",
                    content: e.openGraph.url || e.canonical,
                  })
                ),
              e.openGraph.type)
            ) {
              var A = e.openGraph.type.toLowerCase();
              d.push(
                n.createElement("meta", {
                  key: "og:type",
                  property: "og:type",
                  content: A,
                })
              ),
                "profile" === A && e.openGraph.profile
                  ? (e.openGraph.profile.firstName &&
                      d.push(
                        n.createElement("meta", {
                          key: "profile:first_name",
                          property: "profile:first_name",
                          content: e.openGraph.profile.firstName,
                        })
                      ),
                    e.openGraph.profile.lastName &&
                      d.push(
                        n.createElement("meta", {
                          key: "profile:last_name",
                          property: "profile:last_name",
                          content: e.openGraph.profile.lastName,
                        })
                      ),
                    e.openGraph.profile.username &&
                      d.push(
                        n.createElement("meta", {
                          key: "profile:username",
                          property: "profile:username",
                          content: e.openGraph.profile.username,
                        })
                      ),
                    e.openGraph.profile.gender &&
                      d.push(
                        n.createElement("meta", {
                          key: "profile:gender",
                          property: "profile:gender",
                          content: e.openGraph.profile.gender,
                        })
                      ))
                  : "book" === A && e.openGraph.book
                  ? (e.openGraph.book.authors &&
                      e.openGraph.book.authors.length &&
                      e.openGraph.book.authors.forEach(function (e, t) {
                        d.push(
                          n.createElement("meta", {
                            key: "book:author:0" + t,
                            property: "book:author",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.book.isbn &&
                      d.push(
                        n.createElement("meta", {
                          key: "book:isbn",
                          property: "book:isbn",
                          content: e.openGraph.book.isbn,
                        })
                      ),
                    e.openGraph.book.releaseDate &&
                      d.push(
                        n.createElement("meta", {
                          key: "book:release_date",
                          property: "book:release_date",
                          content: e.openGraph.book.releaseDate,
                        })
                      ),
                    e.openGraph.book.tags &&
                      e.openGraph.book.tags.length &&
                      e.openGraph.book.tags.forEach(function (e, t) {
                        d.push(
                          n.createElement("meta", {
                            key: "book:tag:0" + t,
                            property: "book:tag",
                            content: e,
                          })
                        );
                      }))
                  : "article" === A && e.openGraph.article
                  ? (e.openGraph.article.publishedTime &&
                      d.push(
                        n.createElement("meta", {
                          key: "article:published_time",
                          property: "article:published_time",
                          content: e.openGraph.article.publishedTime,
                        })
                      ),
                    e.openGraph.article.modifiedTime &&
                      d.push(
                        n.createElement("meta", {
                          key: "article:modified_time",
                          property: "article:modified_time",
                          content: e.openGraph.article.modifiedTime,
                        })
                      ),
                    e.openGraph.article.expirationTime &&
                      d.push(
                        n.createElement("meta", {
                          key: "article:expiration_time",
                          property: "article:expiration_time",
                          content: e.openGraph.article.expirationTime,
                        })
                      ),
                    e.openGraph.article.authors &&
                      e.openGraph.article.authors.length &&
                      e.openGraph.article.authors.forEach(function (e, t) {
                        d.push(
                          n.createElement("meta", {
                            key: "article:author:0" + t,
                            property: "article:author",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.article.section &&
                      d.push(
                        n.createElement("meta", {
                          key: "article:section",
                          property: "article:section",
                          content: e.openGraph.article.section,
                        })
                      ),
                    e.openGraph.article.tags &&
                      e.openGraph.article.tags.length &&
                      e.openGraph.article.tags.forEach(function (e, t) {
                        d.push(
                          n.createElement("meta", {
                            key: "article:tag:0" + t,
                            property: "article:tag",
                            content: e,
                          })
                        );
                      }))
                  : ("video.movie" === A ||
                      "video.episode" === A ||
                      "video.tv_show" === A ||
                      "video.other" === A) &&
                    e.openGraph.video &&
                    (e.openGraph.video.actors &&
                      e.openGraph.video.actors.length &&
                      e.openGraph.video.actors.forEach(function (e, t) {
                        e.profile &&
                          d.push(
                            n.createElement("meta", {
                              key: "video:actor:0" + t,
                              property: "video:actor",
                              content: e.profile,
                            })
                          ),
                          e.role &&
                            d.push(
                              n.createElement("meta", {
                                key: "video:actor:role:0" + t,
                                property: "video:actor:role",
                                content: e.role,
                              })
                            );
                      }),
                    e.openGraph.video.directors &&
                      e.openGraph.video.directors.length &&
                      e.openGraph.video.directors.forEach(function (e, t) {
                        d.push(
                          n.createElement("meta", {
                            key: "video:director:0" + t,
                            property: "video:director",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.video.writers &&
                      e.openGraph.video.writers.length &&
                      e.openGraph.video.writers.forEach(function (e, t) {
                        d.push(
                          n.createElement("meta", {
                            key: "video:writer:0" + t,
                            property: "video:writer",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.video.duration &&
                      d.push(
                        n.createElement("meta", {
                          key: "video:duration",
                          property: "video:duration",
                          content: e.openGraph.video.duration.toString(),
                        })
                      ),
                    e.openGraph.video.releaseDate &&
                      d.push(
                        n.createElement("meta", {
                          key: "video:release_date",
                          property: "video:release_date",
                          content: e.openGraph.video.releaseDate,
                        })
                      ),
                    e.openGraph.video.tags &&
                      e.openGraph.video.tags.length &&
                      e.openGraph.video.tags.forEach(function (e, t) {
                        d.push(
                          n.createElement("meta", {
                            key: "video:tag:0" + t,
                            property: "video:tag",
                            content: e,
                          })
                        );
                      }),
                    e.openGraph.video.series &&
                      d.push(
                        n.createElement("meta", {
                          key: "video:series",
                          property: "video:series",
                          content: e.openGraph.video.series,
                        })
                      ));
            }
            e.defaultOpenGraphImageWidth &&
              (s.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth),
              e.defaultOpenGraphImageHeight &&
                (s.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight),
              e.openGraph.images &&
                e.openGraph.images.length &&
                d.push.apply(
                  d,
                  u("image", e.openGraph.images, {
                    defaultWidth: s.defaultOpenGraphImageWidth,
                    defaultHeight: s.defaultOpenGraphImageHeight,
                  })
                ),
              e.defaultOpenGraphVideoWidth &&
                (s.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth),
              e.defaultOpenGraphVideoHeight &&
                (s.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight),
              e.openGraph.videos &&
                e.openGraph.videos.length &&
                d.push.apply(
                  d,
                  u("video", e.openGraph.videos, {
                    defaultWidth: s.defaultOpenGraphVideoWidth,
                    defaultHeight: s.defaultOpenGraphVideoHeight,
                  })
                ),
              e.openGraph.audio &&
                d.push.apply(d, u("audio", e.openGraph.audio)),
              e.openGraph.locale &&
                d.push(
                  n.createElement("meta", {
                    key: "og:locale",
                    property: "og:locale",
                    content: e.openGraph.locale,
                  })
                ),
              (e.openGraph.siteName || e.openGraph.site_name) &&
                d.push(
                  n.createElement("meta", {
                    key: "og:site_name",
                    property: "og:site_name",
                    content: e.openGraph.siteName || e.openGraph.site_name,
                  })
                );
          }
          return (
            e.canonical &&
              d.push(
                n.createElement("link", {
                  rel: "canonical",
                  href: e.canonical,
                  key: "canonical",
                })
              ),
            e.additionalMetaTags &&
              e.additionalMetaTags.length > 0 &&
              e.additionalMetaTags.forEach(function (e) {
                var t,
                  o,
                  r = e.keyOverride,
                  a = l(e, c);
                d.push(
                  n.createElement(
                    "meta",
                    p(
                      {
                        key:
                          "meta:" +
                          (null !=
                          (t =
                            null != (o = null != r ? r : a.name)
                              ? o
                              : a.property)
                            ? t
                            : a.httpEquiv),
                      },
                      a
                    )
                  )
                );
              }),
            null != (r = e.additionalLinkTags) &&
              r.length &&
              e.additionalLinkTags.forEach(function (e) {
                var t,
                  o = e.crossOrigin,
                  r = l(e, h);
                d.push(
                  n.createElement(
                    "link",
                    p(
                      {
                        key:
                          "link" +
                          (null != (t = r.keyOverride) ? t : r.href) +
                          r.rel,
                      },
                      r,
                      {
                        crossOrigin:
                          "anonymous" === o ||
                          "use-credentials" === o ||
                          "" === o
                            ? o
                            : void 0,
                      }
                    )
                  )
                );
              }),
            d
          );
        },
        m = function (e) {
          return n.createElement(i(), null, d(e));
        },
        f = function (e) {
          var t = e.title,
            o = e.titleTemplate,
            r = e.defaultTitle,
            a = e.themeColor,
            i = e.dangerouslySetAllPagesToNoIndex,
            p = e.dangerouslySetAllPagesToNoFollow,
            l = e.description,
            c = e.canonical,
            h = e.facebook,
            s = e.openGraph,
            u = e.additionalMetaTags,
            d = e.twitter,
            f = e.defaultOpenGraphImageWidth,
            g = e.defaultOpenGraphImageHeight,
            y = e.defaultOpenGraphVideoWidth,
            v = e.defaultOpenGraphVideoHeight,
            G = e.mobileAlternate,
            k = e.languageAlternates,
            b = e.additionalLinkTags,
            E = e.robotsProps,
            T = e.norobots;
          return n.createElement(m, {
            title: t,
            titleTemplate: o,
            defaultTitle: r,
            themeColor: a,
            dangerouslySetAllPagesToNoIndex: void 0 !== i && i,
            dangerouslySetAllPagesToNoFollow: void 0 !== p && p,
            description: l,
            canonical: c,
            facebook: h,
            openGraph: s,
            additionalMetaTags: u,
            twitter: d,
            defaultOpenGraphImageWidth: f,
            defaultOpenGraphImageHeight: g,
            defaultOpenGraphVideoWidth: y,
            defaultOpenGraphVideoHeight: v,
            mobileAlternate: G,
            languageAlternates: k,
            additionalLinkTags: b,
            robotsProps: E,
            norobots: T,
          });
        };
      RegExp(
        "[" +
          Object.keys(
            Object.freeze({
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&apos;",
            })
          ).join("") +
          "]",
        "g"
      ),
        o(5149);
      var g = o(5959),
        y = o(7983),
        v = (e) => {
          let { Component: t, pageProps: o } = e,
            n = (0, g.useRouter)(),
            a = n.asPath.split("?")[0],
            i =
              "".concat(y.env.NEXT_PUBLIC_BASE_URL) +
              ("/" === n.asPath ? "" : a);
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(f, {
                title: "Unlock the Full Power of Your DAO",
                titleTemplate: "%s - DaoBank",
                description:
                  "DaoBank offers optimized staking and zero-interest loans to maximize your DAO's potential. Available on Ethereum and soon Finney.",
                canonical: i,
                twitter: {
                  handle: "@DaoBank_",
                  site: "@DaoBank_",
                  cardType: "summary_large_image",
                },
                additionalMetaTags: [
                  { name: "application-name", content: "DaoBank" },
                  { name: "msapplication-TileColor", content: "#da532c" },
                  { name: "theme-color", content: "#ffffff" },
                ],
                additionalLinkTags: [
                  {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "/apple-touch-icon.png",
                  },
                  {
                    rel: "icon",
                    type: "image/png",
                    href: "/favicon-32x32.png",
                    sizes: "32x32",
                  },
                  {
                    rel: "icon",
                    type: "image/png",
                    href: "/favicon-16x16.png",
                    sizes: "16x16",
                  },
                  { rel: "manifest", href: "/site.webmanifest" },
                  {
                    rel: "mask-icon",
                    href: "/safari-pinned-tab.svg",
                    color: "#5bbad5",
                  },
                ],
              }),
              (0, r.jsx)(t, { ...o }),
            ],
          });
        };
    },
    5149: function () {},
    6226: function (e) {
      !(function () {
        var t = {
            229: function (e) {
              var t,
                o,
                r,
                n = (e.exports = {});
              function a() {
                throw Error("setTimeout has not been defined");
              }
              function i() {
                throw Error("clearTimeout has not been defined");
              }
              function p(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === a || !t) && setTimeout)
                  return (t = setTimeout), setTimeout(e, 0);
                try {
                  return t(e, 0);
                } catch (o) {
                  try {
                    return t.call(null, e, 0);
                  } catch (o) {
                    return t.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  t = "function" == typeof setTimeout ? setTimeout : a;
                } catch (e) {
                  t = a;
                }
                try {
                  o = "function" == typeof clearTimeout ? clearTimeout : i;
                } catch (e) {
                  o = i;
                }
              })();
              var l = [],
                c = !1,
                h = -1;
              function s() {
                c &&
                  r &&
                  ((c = !1),
                  r.length ? (l = r.concat(l)) : (h = -1),
                  l.length && u());
              }
              function u() {
                if (!c) {
                  var e = p(s);
                  c = !0;
                  for (var t = l.length; t; ) {
                    for (r = l, l = []; ++h < t; ) r && r[h].run();
                    (h = -1), (t = l.length);
                  }
                  (r = null),
                    (c = !1),
                    (function (e) {
                      if (o === clearTimeout) return clearTimeout(e);
                      if ((o === i || !o) && clearTimeout)
                        return (o = clearTimeout), clearTimeout(e);
                      try {
                        o(e);
                      } catch (t) {
                        try {
                          return o.call(null, e);
                        } catch (t) {
                          return o.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function d(e, t) {
                (this.fun = e), (this.array = t);
              }
              function m() {}
              (n.nextTick = function (e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var o = 1; o < arguments.length; o++)
                    t[o - 1] = arguments[o];
                l.push(new d(e, t)), 1 !== l.length || c || p(u);
              }),
                (d.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (n.title = "browser"),
                (n.browser = !0),
                (n.env = {}),
                (n.argv = []),
                (n.version = ""),
                (n.versions = {}),
                (n.on = m),
                (n.addListener = m),
                (n.once = m),
                (n.off = m),
                (n.removeListener = m),
                (n.removeAllListeners = m),
                (n.emit = m),
                (n.prependListener = m),
                (n.prependOnceListener = m),
                (n.listeners = function (e) {
                  return [];
                }),
                (n.binding = function (e) {
                  throw Error("process.binding is not supported");
                }),
                (n.cwd = function () {
                  return "/";
                }),
                (n.chdir = function (e) {
                  throw Error("process.chdir is not supported");
                }),
                (n.umask = function () {
                  return 0;
                });
            },
          },
          o = {};
        function r(e) {
          var n = o[e];
          if (void 0 !== n) return n.exports;
          var a = (o[e] = { exports: {} }),
            i = !0;
          try {
            t[e](a, a.exports, r), (i = !1);
          } finally {
            i && delete o[e];
          }
          return a.exports;
        }
        r.ab = "//";
        var n = r(229);
        e.exports = n;
      })();
    },
    3850: function (e, t, o) {
      e.exports = o(5799);
    },
    5959: function (e, t, o) {
      e.exports = o(5390);
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(4596), t(5390);
    }),
      (_N_E = e.O());
  },
]);
