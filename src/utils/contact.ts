import { BUSINESS_CONFIG } from "../config/business";

export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export function openDialer(): void {
  window.location.href = BUSINESS_CONFIG.phoneHref;
}

export function openEmail(): void {
  window.location.href = BUSINESS_CONFIG.emailHref;
}
