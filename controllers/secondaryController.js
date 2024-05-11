// secondaryController.js
// Controller functions to render pages in the "latestPages", "teamPages", and "ticketPages" categories

const express = require("express");

// Render pages under the "latestPages" category
export function renderDiscover(req, res) {
  res.render("secondaryPages/latestPages/discover", { title: "Discover" });
}

export function renderNews(req, res) {
  res.render("secondaryPages/latestPages/news", { title: "News" });
}

// Render pages under the "teamPages" category
export function renderFixturesResults(req, res) {
  res.render("secondaryPages/teamPages/fixtures-results", {
    title: "Fixtures & Results",
  });
}

export function renderLeagueTables(req, res) {
  res.render("secondaryPages/teamPages/league-tables", {
    title: "League Tables",
  });
}

export function renderPlayersStaff(req, res) {
  res.render("secondaryPages/teamPages/players-staff", {
    title: "Players & Staff",
  });
}

// Render pages under the "ticketPages" category
export function renderMembership(req, res) {
  res.render("secondaryPages/ticketPages/membership", { title: "Membership" });
}

export function renderSeasonTickets(req, res) {
  res.render("secondaryPages/ticketPages/season-tickets", {
    title: "Season Tickets",
  });
}

export function renderTickets(req, res) {
  res.render("secondaryPages/ticketPages/tickets", { title: "Tickets" });
}
