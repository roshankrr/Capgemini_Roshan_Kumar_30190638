from requirement_agent import requirement_agent
from test_case_generation_agent import test_case_generation_agent
from test_data_agent import test_data_agent
from bug_analysis_agent import bug_analysis_agent
from bug_report_agent import bug_report_agent
from frd.py import FRD

requirement = FRD


# ==========================================
# AGENT 1 - REQUIREMENT ANALYSIS
# ==========================================

print("\n" + "=" * 70)
print("AGENT 1 - REQUIREMENT ANALYSIS")
print("=" * 70)

analysis_response = requirement_agent.invoke({
    "requirement": requirement
})

analysis = analysis_response.content

print(analysis)


# ==========================================
# AGENT 2 - TEST CASE GENERATION
# ==========================================

print("\n" + "=" * 70)
print("AGENT 2 - TEST CASE GENERATION")
print("=" * 70)

test_case_response = test_case_generation_agent.invoke({
    "requirement": requirement,
    "analysis": analysis
})

test_cases = test_case_response.content

print(test_cases)

print("\nFULL RESPONSE:")
print(test_case_response)

print("\nCONTENT:")
print(test_case_response.content)


# ==========================================
# AGENT 3 - TEST DATA GENERATION
# ==========================================

print("\n" + "=" * 70)
print("AGENT 3 - TEST DATA GENERATION")
print("=" * 70)

test_data_response = test_data_agent.invoke({
    "requirement": requirement,
    "test_cases": test_cases
})

test_data = test_data_response.content

print(test_data)

print("\nFULL RESPONSE:")
print(test_data_response)

print("\nCONTENT:")
print(test_data_response.content)


# ==========================================
# AGENT 4 - BUG_ANALYSIS
# ==========================================

print("\n" + "=" * 70)
print("AGENT 4 - BUG_ANALYSIS")
print("=" * 70)

analysis_response = bug_analysis_agent.invoke({
    "requirement": requirement,
    "test_cases": test_cases,
    "test_data":test_data
})

bug_analysis = analysis_response.content

print(bug_analysis)

print("\nFULL RESPONSE:")
print(analysis_response)

print("\nCONTENT:")
print(analysis_response.content)



# ==========================================
# AGENT 5 - BUG_REPORT_GENERATION
# ==========================================

print("\n" + "=" * 70)
print("AGENT 5 - BUG_ANALYSIS")
print("=" * 70)

analysis_response = bug_report_agent.invoke({
    "requirement": requirement,
    "bug_analysis":bug_analysis

})

bug_report = analysis_response.content

print(bug_report)

print("\nFULL RESPONSE:")
print(analysis_response)

print("\nCONTENT:")
print(analysis_response.content)